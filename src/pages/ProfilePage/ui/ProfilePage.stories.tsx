import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Theme } from '@/shared/const/theme';
import avatar from '@/shared/assets/test/avatar-example.png';
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
