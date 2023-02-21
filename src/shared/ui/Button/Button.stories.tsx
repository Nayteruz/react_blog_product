import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, themeButton } from './Button';
import 'app/styles/index.scss';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: themeButton.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme: themeButton.OUTLINE,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    theme: themeButton.OUTLINE,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
