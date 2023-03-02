import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'feature/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '1234',
};
Primary.decorators = [StoryDecorator({
    loginForm: { username: 'login name', password: 'password123' },
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoryDecorator({
    loginForm: { username: 'login name', password: 'password123', error: 'error example' },
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
