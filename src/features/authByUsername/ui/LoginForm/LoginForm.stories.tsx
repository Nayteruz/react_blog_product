import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

import LoginForm from './LoginForm';
// eslint-disable-next-line nayteruz-test-production-plugin/layer-imports
import '@/app/styles/index.scss';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoryDecorator({
    loginForm: {
        username: 'login name', password: 'password123',
    },
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoryDecorator({
    loginForm: {
        username: 'login name', password: 'password123', error: 'error example',
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoryDecorator({
    loginForm: { isLoading: true },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [
    StoryDecorator({
        loginForm: { username: 'login name', password: 'password123' },
    }),
    ThemeDecorator(Theme.DARK),
];
