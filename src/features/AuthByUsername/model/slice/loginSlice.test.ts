import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user 123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('user 123'),
            ),
        ).toStrictEqual({ username: 'user 123' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'user 123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('password 123'),
            ),
        ).toStrictEqual({ password: 'password 123' });
    });
});
