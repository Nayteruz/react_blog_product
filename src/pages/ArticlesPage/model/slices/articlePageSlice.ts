import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoryProvider';
import {
    Article, ArticleType, ArticleView, ArticleSortFiled,
} from '@/entities/Article';
import { ARTICLES_VIEW_STORAGE_KEY } from '@/shared/const/localstorage';
import { SortOrder } from '@/shared/types';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
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
        _inited: false,
        sort: ArticleSortFiled.TITLE,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortFiled>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_STORAGE_KEY) as ArticleView;
            state.view = view || ArticleView.SIMPLE;
            state.limit = state.view === ArticleView.SIMPLE ? 6 : 3;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(
                fetchArticlesList.fulfilled,
                (
                    state,
                    action,
                ) => {
                    state.isLoading = false;
                    state.hasMore = action.payload.length >= state.limit;

                    if (action.meta.arg.replace) {
                        articlesAdapter.setAll(state, action.payload);
                    } else {
                        articlesAdapter.addMany(state, action.payload);
                    }
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
