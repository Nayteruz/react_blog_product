import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { Text, TextTheme } from 'shared/ui/Text/Text';
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
