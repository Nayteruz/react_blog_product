/* eslint-disable no-alert */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Dropdown from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Click to Dropdown</Button>,
    items: [
        {
            content: 'Test item 1',
            onClick: () => alert('click on item'),
        },
        {
            content: 'Test item 2',
            onClick: () => alert('click on item'),
        },
        {
            content: 'Test item 3',
            onClick: () => alert('click on item'),
        },
        {
            content: 'Test item 4',
            onClick: () => alert('click on item'),
        },
    ],
};
