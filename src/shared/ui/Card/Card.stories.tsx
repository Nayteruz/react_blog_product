import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
    const { children } = args;
    return <Card {...args}>{children}</Card>;
};

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="text" text="text text text" />,
};
