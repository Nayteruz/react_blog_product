import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoryProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
    >(
        'articleDetails/fetchArticleDetailsData',
        async (articleId, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.api.get<Article>(`/articles/${articleId}`, {
                    params: {
                        _expand: 'user',
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (err) {
            // eslint-disable-next-line no-console
                console.log(err);
                return rejectWithValue('Статья не найдена либо отсутствует');
            }
        },
    );
