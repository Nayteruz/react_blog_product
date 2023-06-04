import { memo, useCallback } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlePage/fetchNextArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlePageSlice';
import cls from './ArticlesPage.module.scss';

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => dispatch(fetchNextArticlesPage()), [dispatch]);

    useInitialEffect(() => dispatch(initArticlesPage(searchParams)));

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={cn(cls.ArticlesPage, {})}
            >
                <VStack gap="16">
                    <ArticlesPageFilters />
                    <ArticleInfiniteList className={cls.list} />
                </VStack>

            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
