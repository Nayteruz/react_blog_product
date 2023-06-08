import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'pages/ArticleDetails/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    id: '1',
};
Normal.decorators = [StoryDecorator({})];
