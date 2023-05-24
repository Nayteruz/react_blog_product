import { classNames as cn } from 'shared/lib/classNames/classNames';
import {
    FC, HTMLAttributeAnchorTarget, memo, useEffect, useRef, useState,
} from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { HStack, VStack } from 'shared/ui/Stack';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
    isLazy?: boolean;
}

const Header = () => <ArticlesPageFilters />;

const getSkeletons = () => new Array(3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={ArticleView.LIST} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SIMPLE,
        isLoading,
        target,
        onLoadNextPart,
        isLazy = true,
    } = props;
    const { t } = useTranslation('article');
    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 1;
        setSelectedArticleId(+paged);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (view === ArticleView.SIMPLE) {
            timeoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100);
        }

        return () => clearTimeout(timeoutId);
    }, [selectedArticleId, view]);

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
            index={index}
        />
    );

    // eslint-disable-next-line react/no-unstable-nested-components
    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getSkeletons()}
                </div>
            );
        }
        return null;
    });

    if (!isLoading && !articles.length) {
        return (
            <div className={cn(cls.ArticleList, { [cls.notFound]: true }, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    // eslint-disable-next-line react/no-unstable-nested-components
    const ItemContainerComp: FC<{ index: number }> = ({ index }) => {
        return (
            <div className={cls.ItemContainer}>
                <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
            </div>
        );
    };

    return (
        <VStack className={cn(cls.ArticleList, {}, [className, cls[view]])}>
            {
                // eslint-disable-next-line no-nested-ternary
                !isLazy
                    ? <HStack gap="16">{articles.map((article, index) => renderArticle(index, article))}</HStack>
                    : view === 'LIST' ? (
                        <Virtuoso
                            style={{ height: '100%' }}
                            data={articles}
                            itemContent={renderArticle}
                            endReached={onLoadNextPart}
                            className={cls.itemsWrapperList}
                            initialTopMostItemIndex={selectedArticleId}
                            components={{
                                Header,
                                Footer,
                            }}
                        />
                    )
                        : (
                            <VirtuosoGrid
                                ref={virtuosoGridRef}
                                totalCount={articles.length}
                                components={{
                                    Header,
                                    ScrollSeekPlaceholder: ItemContainerComp,
                                }}
                                endReached={onLoadNextPart}
                                data={articles}
                                itemContent={renderArticle}
                                listClassName={cls.itemsWrapper}
                                scrollSeekConfiguration={{
                                    enter: (velocity) => Math.abs(velocity) > 200,
                                    exit: (velocity) => Math.abs(velocity) < 30,
                                }}
                            />
                        )
            }
        </VStack>
    );
});
