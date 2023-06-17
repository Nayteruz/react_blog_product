import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { StoryDecorator } from '@/shared/config/storybook';

import { NotificationButton } from './NotificationButton';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoryDecorator({}), withMock],
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление 1',
                    description: 'Произошло какое-то событие',
                    userId: '1',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Произошло какое-то событие',
                    userId: '1',
                    href: 'http://localhost:3000/admin',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Произошло какое-то событие',
                    userId: '1',
                    href: 'http://localhost:3000/admin',
                },
            ],
        },
    ],
};
