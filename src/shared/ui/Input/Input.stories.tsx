import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';

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
Primary.decorators = [StoryDecorator({})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    placeholder: 'Type text',
    value: '1234',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoryDecorator({})];
