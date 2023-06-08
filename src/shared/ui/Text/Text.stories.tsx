import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text title',
    text: 'Text body',
};
Primary.decorators = [StoryDecorator({})];

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'Text title',
    text: 'Text body',
    theme: TextTheme.ERROR,
};
ErrorText.decorators = [StoryDecorator({})];

export const DarkText = Template.bind({});
DarkText.args = {
    title: 'Text title',
    text: 'Text body',
};
DarkText.decorators = [ThemeDecorator(Theme.DARK), StoryDecorator({})];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Text title',
};
OnlyTitle.decorators = [StoryDecorator({})];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Text title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK), StoryDecorator({})];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text body',
};
OnlyText.decorators = [StoryDecorator({})];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text body',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK), StoryDecorator({})];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Text title',
    text: 'Text body',
    size: TextSize.L,
};
SizeL.decorators = [StoryDecorator({})];

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Text title',
    text: 'Text body',
    size: TextSize.M,
};
SizeM.decorators = [StoryDecorator({})];

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Text title',
    text: 'Text body',
    size: TextSize.S,
};
SizeS.decorators = [StoryDecorator({})];
