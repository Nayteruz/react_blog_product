import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';
import { StoryDecorator } from '@/shared/config/storybook/StoryDecorator/StoryDecorator';

export default {
    title: 'features/EditableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoryDecorator({
        profile: { readonly: false },
    })],
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Readonly = Template.bind({});
Readonly.args = {};
Readonly.decorators = [StoryDecorator({
    profile: { readonly: false },
})];
