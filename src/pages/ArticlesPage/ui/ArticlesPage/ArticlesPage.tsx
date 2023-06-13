import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page/Page';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlePage/fetchNextArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlePageSlice';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import cls from './ArticlesPage.module.scss';

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => dispatch(fetchNextArticlesPage()), [dispatch]);

    useInitialEffect(() => dispatch(initArticlesPage(searchParams)));

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={cn(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.list} />
            </Page>

        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
