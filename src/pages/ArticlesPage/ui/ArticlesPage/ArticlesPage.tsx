import { classNames as cn } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlePage/fetchNextArticlesPage';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageReducer, getArticles } from '../../model/slices/articlePageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => dispatch(fetchNextArticlesPage()), [dispatch]);

    useInitialEffect(() => dispatch(initArticlesPage(searchParams)));

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {/* <Page */}
            {/*    onScrollEnd={onLoadNextPart} */}
            {/*    className={cn(cls.ArticlesPage, {}, [className])} */}
            {/* > */}
            {/*    <ArticlesPageFilters /> */}
            {/*    <ArticleList */}
            {/*        className={cls.list} */}
            {/*        isLoading={isLoading} */}
            {/*        view={view} */}
            {/*        articles={articles} */}
            {/*    /> */}
            {/* </Page> */}
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={cls.listArticles}
                onLoadNextPart={onLoadNextPart}
            />
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
