import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import 'app/styles/index.scss';

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
Primary.decorators = [StoryDecorator({})];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
Clear.decorators = [StoryDecorator({})];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};
ClearInverted.decorators = [StoryDecorator({})];

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
Outlined.decorators = [StoryDecorator({})];

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
OutlinedSizeL.decorators = [StoryDecorator({})];

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
OutlinedSizeXL.decorators = [StoryDecorator({})];

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlinedDark.decorators = [StoryDecorator({}), ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundTheme.decorators = [StoryDecorator({})];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};
Square.decorators = [StoryDecorator({})];

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
SquareSizeL.decorators = [StoryDecorator({})];

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
SquareSizeXL.decorators = [StoryDecorator({})];

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
Disabled.decorators = [StoryDecorator({})];
