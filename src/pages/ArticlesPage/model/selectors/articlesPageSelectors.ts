import { StateSchema } from 'app/providers/StoryProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPagePageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SIMPLE;
export const getArticlesPagePageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPagePageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPagePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore || true;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
