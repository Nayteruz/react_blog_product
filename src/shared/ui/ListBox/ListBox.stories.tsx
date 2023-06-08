import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import ListBox from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: '200px 30px' }}><Story /></div>,
    ],
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
Normal.decorators = [StoryDecorator({})];

export const WithLabel = Template.bind({});
WithLabel.args = {
    value: (() => firstItem.value) as unknown as string,
    onChange: (val) => {
        firstItem.value = val;
    },
    items: listItems,
    label: 'Test label',
};
WithLabel.decorators = [StoryDecorator({})];

export const WithLabelBottomRight = Template.bind({});
WithLabelBottomRight.args = {
    value: (() => firstItem.value) as unknown as string,
    onChange: (val) => {
        firstItem.value = val;
    },
    items: listItems,
    label: 'Test label',
    direction: 'bottom right',
};
WithLabelBottomRight.decorators = [StoryDecorator({})];

export const WithLabelTopRight = Template.bind({});
WithLabelTopRight.args = {
    value: (() => firstItem.value) as unknown as string,
    onChange: (val) => {
        firstItem.value = val;
    },
    items: listItems,
    label: 'Test label',
    direction: 'top right',
};
WithLabelTopRight.decorators = [StoryDecorator({})];

export const WithLabelTopLeft = Template.bind({});
WithLabelTopLeft.args = {
    value: (() => firstItem.value) as unknown as string,
    onChange: (val) => {
        firstItem.value = val;
    },
    items: listItems,
    label: 'Test label',
    direction: 'top left',
};
WithLabelTopLeft.decorators = [StoryDecorator({})];
