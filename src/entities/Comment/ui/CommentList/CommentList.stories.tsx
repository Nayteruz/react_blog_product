import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Hello world',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '2', username: 'Petya' },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [
        {
            id: '1',
            text: 'Hello world',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'Hello world',
            user: { id: '1', username: 'Vasya' },
        },
    ],
    isLoading: true,
};
