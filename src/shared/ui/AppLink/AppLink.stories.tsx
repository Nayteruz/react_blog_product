import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'LinkText',
};
Primary.decorators = [StoryDecorator({})];

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'LinkText',
    theme: AppLinkTheme.SECONDARY,
};
Secondary.decorators = [StoryDecorator({})];

export const Red = Template.bind({});
Red.args = {
    children: 'LinkText',
    theme: AppLinkTheme.RED,
};
Red.decorators = [StoryDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'LinkText',
};
PrimaryDark.decorators = [StoryDecorator({}), ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'LinkText',
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [StoryDecorator({}), ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'LinkText',
    theme: AppLinkTheme.RED,
};
RedDark.decorators = [StoryDecorator({}), ThemeDecorator(Theme.DARK)];
