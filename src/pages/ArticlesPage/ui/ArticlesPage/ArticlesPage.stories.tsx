import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlePage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoryDecorator({})];
