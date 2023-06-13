import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/ProfileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 456,
    currency: Currency.USD,
    country: Country.Uzbekistan,
    city: 'Barnaul',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin123' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('Read only has change on', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('On cancel data in stock', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'user');

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('admin');
    });

    test('Has error validation', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        setTimeout(() => {
            expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
        }, 100);
    });

    test('No error validation data', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
