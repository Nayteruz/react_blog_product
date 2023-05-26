import { ComponentMeta, ComponentStory } from '@storybook/react';

import ListBox from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const listItems = [
    { value: 'value 1', content: 'test 1' },
    { value: 'value 2', content: 'test 2' },
    { value: 'value 3', content: 'test 3', disabled: true },
    { value: 'value 4', content: 'test 4' },
];
const firstItem = {
    value: listItems[0].content,
};

export const Normal = Template.bind({});
Normal.args = {
    value: (() => firstItem.value) as unknown as string,
    onChange: (val) => {
        firstItem.value = val;
    },
    items: listItems,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    value: (() => firstItem.value) as unknown as string,
    onChange: (val) => {
        firstItem.value = val;
    },
    items: listItems,
    label: 'Test label',
};
