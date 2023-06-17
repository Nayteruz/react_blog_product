import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Article, ArticleType } from '@/entities/Article';
import { StoryDecorator } from '@/shared/config/storybook';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: '',
    views: 1000,
    createdAt: '26.02.2022',
    user: { id: '1', username: 'User test' },
    type: [ArticleType.IT],
    blocks: [],
};

export default {
    title: 'pages/ArticleDetails/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoryDecorator({})];

export const ArticleOwner = Template.bind({});
ArticleOwner.args = {};
ArticleOwner.decorators = [
    StoryDecorator({
        user: {
            authData: {
                id: '1',
                username: '1234',
            },
        },
        articleDetails: {
            data: article,
        },
    }),
];
