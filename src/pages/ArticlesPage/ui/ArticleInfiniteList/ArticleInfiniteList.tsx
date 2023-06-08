import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { getArticles } from '../../model/slices/articlePageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticleInfiniteListProps {
    className?: string;
    onLoadNextPart: () => void;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className, onLoadNextPart } = props;
    const { t } = useTranslation('article');
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
            onLoadNextPart={onLoadNextPart}
            headerItem={() => <ArticlesPageFilters />}
        />
    );
});
