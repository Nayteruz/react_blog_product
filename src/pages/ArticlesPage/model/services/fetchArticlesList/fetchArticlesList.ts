import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoryProvider';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'articlePage/fetchArticlesList',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;

            try {
                const response = await extra.api.get<Article[]>('/articles', {
                    params: {
                        _expand: 'user',
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
