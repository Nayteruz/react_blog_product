import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/ArticlePage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoryDecorator({})];
