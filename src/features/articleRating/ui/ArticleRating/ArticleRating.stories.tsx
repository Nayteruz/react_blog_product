import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { StoryDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Theme } from '@/shared/const/theme';

import ArticleRating from './ArticleRating';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock, (Story) => (<div style={{ padding: 20 }}><Story /></div>)],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    articleId: '2',
};
Normal.decorators = [StoryDecorator({
    user: {
        authData: { id: '2' },
    },
})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=2&articleId=2`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    articleId: '2',
};
WithoutRate.decorators = [StoryDecorator({
    user: {
        authData: { id: '2' },
    },
})];
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=2&articleId=2`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

export const NormalDark = Template.bind({});
NormalDark.args = {
    articleId: '2',
};
NormalDark.decorators = [StoryDecorator({
    user: {
        authData: { id: '2' },
    },
}), ThemeDecorator(Theme.DARK)];
NormalDark.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=2&articleId=2`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};
