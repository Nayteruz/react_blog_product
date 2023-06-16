import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';
import { StoryDecorator } from '@/shared/config/storybook/StoryDecorator/StoryDecorator';

export default {
    title: 'pages/ArticlePage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoryDecorator({})],
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
