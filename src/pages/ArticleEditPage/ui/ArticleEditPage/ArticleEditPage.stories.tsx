import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryDecorator } from '@/shared/config/storybook';

import ArticleEditPage from './ArticleEditPage';

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
