import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoryDecorator({})];
