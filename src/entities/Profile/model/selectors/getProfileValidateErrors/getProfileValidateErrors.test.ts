import { StateSchema } from 'app/providers/StoryProvider';
import { getProfileValidateErrors } from './getProfileValidateError';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileReadonly.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_USER_AUTH,
                    ValidateProfileError.INCORRECT_COUNTRY,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_USER_AUTH,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
