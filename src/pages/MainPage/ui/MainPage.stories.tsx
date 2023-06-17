import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoryDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoryDecorator({})];
