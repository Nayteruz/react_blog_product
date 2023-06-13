import { StateSchema } from '@/app/providers/StoryProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: 'password' },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('password');
    });
    test('should work with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
