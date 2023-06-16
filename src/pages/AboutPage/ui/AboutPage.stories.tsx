import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '../../../app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';
import { StoryDecorator } from '@/shared/config/storybook/StoryDecorator/StoryDecorator';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoryDecorator({})],
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
