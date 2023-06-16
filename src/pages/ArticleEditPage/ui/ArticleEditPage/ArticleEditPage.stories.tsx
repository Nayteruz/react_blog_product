import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';
import { StoryDecorator } from '@/shared/config/storybook/StoryDecorator/StoryDecorator';

export default {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoryDecorator({})],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const EditPage = Template.bind({});
EditPage.args = {};
EditPage.decorators = [((Story) => {
    return (
        <div style={{ padding: 20 }}>
            <span>Найти вариант где можно имитировать параметры строки браузера</span>
            <Story />
        </div>
    );
})];
