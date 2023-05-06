import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoryProvider';
import {
    getArticlesPageIsLoading,
    getArticlesPagePageHasMore,
    getArticlesPagePageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlePage/fetchNextArticlesPage',
        async (_, thunkAPI) => {
            const { getState, dispatch } = thunkAPI;
            const hasMore = getArticlesPagePageHasMore(getState());
            const page = getArticlesPagePageNum(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticlesList({
                    page: page + 1,
                }));
            }
        },
    );
