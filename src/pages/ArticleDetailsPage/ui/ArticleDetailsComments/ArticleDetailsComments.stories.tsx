import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoryDecorator } from '@/shared/config/storybook';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'pages/ArticleDetails/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoryDecorator({}), withMock],
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    id: '5',
};

export const WithComments = Template.bind({});
WithComments.args = {
    id: '5',
};
WithComments.decorators = [
    StoryDecorator({
        user: {
            authData: {
                id: '1',
                username: '123',
            },
        },
    }),
];
