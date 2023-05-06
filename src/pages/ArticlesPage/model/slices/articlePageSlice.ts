import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoryProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ARTICLES_VIEW_STORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSLice = createSlice({
    name: 'articlesPageSLice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SIMPLE,
        page: 1,
        limit: 9,
        hasMore: true,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_STORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.SIMPLE ? 9 : 4;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (
                    state,
                    action: PayloadAction<Article[]>,
                ) => {
                    state.isLoading = false;
                    articlesAdapter.addMany(state, action.payload);
                    console.log(Boolean(action.payload.length));
                    state.hasMore = action.payload.length > 0;
                },
            )
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions,
} = articlesPageSLice;
