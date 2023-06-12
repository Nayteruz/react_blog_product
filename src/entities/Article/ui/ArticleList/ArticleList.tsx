import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ComponentType,
    FC,
    HTMLAttributeAnchorTarget, memo, useEffect, useRef, useState,
} from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
    virtualized?: boolean;
    onLoadNextPart?: () => void;
    headerItem?: ComponentType<{ context?: any; }> | undefined;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SIMPLE ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SIMPLE,
        isLoading,
        target,
        virtualized = true,
        headerItem,
        onLoadNextPart,
    } = props;
    const { t } = useTranslation();

    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 0;
        setSelectedArticleId(+paged);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (view === 'SIMPLE') {
            timeoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100);
        }
        return () => clearTimeout(timeoutId);
    }, [selectedArticleId, view]);

    if (!isLoading && !articles.length) {
        return (
            <div className={cn(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ItemContainerComp: FC<{index: number; width: number; height: number;}> = ({ index, width, height }) => {
        <div className={cls.ItemContainer}>
            <ArticleListItemSkeleton view={view} key={index} className={cls.card} />
        </div>;
    };

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getSkeletons(view)}
                </div>
            );
        }
        return null;
    });

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            target={target}
            key={article.id}
            index={index}
        />
    );

    return (
        <div className={cn(cls.ArticleList, {}, [className, cls[view]])}>
            {/* eslint-disable-next-line no-nested-ternary */}
            { !virtualized ? (
                articles.map((item) => (
                    <ArticleListItem
                        article={item}
                        view={view}
                        target={target}
                        key={item.id}
                        className={cls.card}
                    />
                ))
            ) : view === 'LIST' ? (
                <Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                        Header: headerItem,
                        Footer,
                    }}
                />
            ) : (
                <VirtuosoGrid
                    ref={virtuosoGridRef}
                    totalCount={articles.length}
                    components={{
                        Header: headerItem,
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
            )}
        </div>
    );
});
