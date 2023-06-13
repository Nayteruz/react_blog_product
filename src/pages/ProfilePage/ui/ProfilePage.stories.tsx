import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryDecorator } from '@/shared/config/storybook/StoryDecorator/StoryDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/test/avatar-example.png';
import { Theme } from '../../../app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoryDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 35,
            country: Country.Uzbekistan,
            lastname: 'Alex',
            first: 'Alex',
            city: 'Barnaul',
            currency: Currency.RUB,
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoryDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 35,
            country: Country.Uzbekistan,
            lastname: 'Alex',
            first: 'Alex',
            city: 'Barnaul',
            currency: Currency.RUB,
            avatar,
        },
    },
})];
