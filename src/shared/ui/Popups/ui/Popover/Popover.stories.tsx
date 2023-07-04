import { ComponentMeta, ComponentStory } from '@storybook/react';

import Popover from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => {
    const { children } = args;
    return <Popover {...args}>{children}</Popover>;
};

export const LeftBottom = Template.bind({});
LeftBottom.args = {
    trigger: <span style={{ display: 'inline-flex', padding: '5px 10px', border: '1px solid #ccc' }}>Триггер</span>,
    children: (
        <div>
            <h3>Заголовок пример</h3>
            <ul>
                <li>Пример пункта</li>
                <li>Пример пункта</li>
                <li>Пример пункта</li>
            </ul>
        </div>
    ),
    direction: 'bottom left',
};

export const RightBottom = Template.bind({});
RightBottom.args = {
    trigger: <span style={{ display: 'inline-flex', padding: '5px 10px', border: '1px solid #ccc' }}>Триггер</span>,
    children: (
        <div>
            <h3>Заголовок пример</h3>
            <ul>
                <li>Пример пункта</li>
                <li>Пример пункта</li>
                <li>Пример пункта</li>
            </ul>
        </div>
    ),
    direction: 'bottom right',
};
RightBottom.decorators = [
    (Story) => (
        <div style={{
            display: 'inline-flex',
            padding: '30px 0 300px 150px',
            position: 'relative',
        }}
        >
            <Story />
        </div>
    ),
];

export const LeftTop = Template.bind({});
LeftTop.args = {
    trigger: <span style={{ display: 'inline-flex', padding: '5px 10px', border: '1px solid #ccc' }}>Триггер</span>,
    children: (
        <div>
            <h3>Заголовок пример</h3>
            <ul>
                <li>Пример пункта</li>
                <li>Пример пункта</li>
                <li>Пример пункта</li>
            </ul>
        </div>
    ),
    direction: 'top left',
};
LeftTop.decorators = [
    (Story) => (
        <div style={{
            display: 'inline-flex',
            padding: '250px 0 300px 150px',
            position: 'relative',
            minWidth: 300,
        }}
        >
            <Story />
        </div>
    ),
];

export const RightTop = Template.bind({});
RightTop.args = {
    trigger: <span style={{ display: 'inline-flex', padding: '5px 10px', border: '1px solid #ccc' }}>Триггер</span>,
    children: (
        <div>
            <h3>Заголовок пример</h3>
            <ul>
                <li>Пример пункта</li>
                <li>Пример пункта</li>
                <li>Пример пункта</li>
            </ul>
        </div>
    ),
    direction: 'top right',
};
RightTop.decorators = [
    (Story) => (
        <div style={{
            display: 'inline-flex',
            padding: '250px 0 300px 150px',
            position: 'relative',
            minWidth: 300,
        }}
        >
            <Story />
        </div>
    ),
];
