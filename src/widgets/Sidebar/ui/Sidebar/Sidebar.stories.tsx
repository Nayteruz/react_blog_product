import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoryDecorator({
        user: { authData: {} },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoryDecorator({
        user: { authData: {} },
    }),
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
    StoryDecorator({
        user: {},
    }),
];
