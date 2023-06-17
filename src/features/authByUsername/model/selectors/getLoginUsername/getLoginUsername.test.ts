import { StateSchema } from '@/app/providers/StoryProvider';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return string', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });
    test('should work with empty', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
