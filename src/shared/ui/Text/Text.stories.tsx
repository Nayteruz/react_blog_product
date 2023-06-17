import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/shared/const/theme';

import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
// eslint-disable-next-line nayteruz-test-production-plugin/layer-imports
import '@/app/styles/index.scss';

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

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'Text title',
    text: 'Text body',
    theme: TextTheme.ERROR,
};

export const DarkText = Template.bind({});
DarkText.args = {
    title: 'Text title',
    text: 'Text body',
};
DarkText.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Text title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Text title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text body',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text body',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Text title',
    text: 'Text body',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Text title',
    text: 'Text body',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Text title',
    text: 'Text body',
    size: TextSize.S,
};
