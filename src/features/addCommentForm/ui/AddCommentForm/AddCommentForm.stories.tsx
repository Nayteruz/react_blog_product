import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StoryDecorator } from '@/shared/config/storybook';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoryDecorator({})],
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    onSendComment: action('onSendComment'),
};
