import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';
import { StoryDecorator } from '@/shared/config/storybook/StoryDecorator/StoryDecorator';

export default {
    title: 'features/EditableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoryDecorator({})],
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Readonly = Template.bind({});
Readonly.args = {};
Readonly.decorators = [StoryDecorator({
    profile: { readonly: false },
})];
