import { StateSchema } from '@/app/providers/StoryProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const data = {
            username: 'admin',
            age: 35,
            country: Country.Uzbekistan,
            lastname: 'Alex',
            first: 'Alex',
            city: 'Barnaul',
            currency: Currency.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
