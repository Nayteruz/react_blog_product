import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoryProvider';
import { Article } from 'entities/Article';
import { getArticlesPagePageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articlePage/fetchArticlesList',
        async (props, thunkAPI) => {
            const { extra, rejectWithValue, getState } = thunkAPI;
            const { page = 1 } = props;
            const limit = getArticlesPagePageLimit(getState());

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (err) {
                return rejectWithValue('Статьи не найдены');
            }
        },
    );
