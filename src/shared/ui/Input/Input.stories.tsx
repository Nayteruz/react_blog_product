import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/shared/const/theme';

// eslint-disable-next-line nayteruz-test-production-plugin/layer-imports
import '@/app/styles/index.scss';
import { Input } from './Input';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type text',
    value: '1234',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    placeholder: 'Type text',
    value: '1234',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NoLabel = Template.bind({});
NoLabel.args = {
    placeholder: 'Type text',
    value: '1234',
    placeholderTopName: false,
};
