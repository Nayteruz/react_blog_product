import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localstorage';
import { ThunkConfig } from '@/app/providers/StoryProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
    >(
        'login/loginByUsername',
        async (authData, thunkAPI) => {
            const { dispatch, extra, rejectWithValue } = thunkAPI;
            try {
                const response = await extra.api.post('/login', authData);

                if (!response.data) {
                    throw new Error('ошибка загрузки');
                }

                localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));
                return response.data;
            } catch (err) {
            // eslint-disable-next-line no-console
                console.log(err);
                return rejectWithValue('Вы ввели не верный логин или пароль');
            }
        },
    );
