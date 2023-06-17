import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UserRole } from '@/entities/User';
import { StoryDecorator } from '@/shared/config/storybook';

import { AvatarDropdown } from './AvatarDropdown';
import '@/shared/ui/Popups';
// eslint-disable-next-line nayteruz-test-production-plugin/layer-imports
import '@/app/styles/index.scss';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoryDecorator({
        user: {
            authData: { id: '1', username: 'admin', avatar: 'https://img.freepik.com/free-photo/side-view-male-hacker-with-gloves-laptop_23-2148578161.jpg' },
        },
    })],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <div style={{
        display: 'flex', justifyContent: 'flex-end', padding: 20, border: '1px solid #ccc',
    }}
    >
        <AvatarDropdown {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {};

export const IsAdminOrManager = Template.bind({});
IsAdminOrManager.args = {};
IsAdminOrManager.decorators = [
    StoryDecorator({
        user: {
            authData: {
                avatar: 'https://img.freepik.com/free-photo/side-view-male-hacker-with-gloves-laptop_23-2148578161.jpg',
                id: '1',
                roles: [UserRole.ADMIN],
                username: 'admin',
            },
        },
    }),
];
