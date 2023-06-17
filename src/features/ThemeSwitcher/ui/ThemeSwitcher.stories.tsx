import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line nayteruz-test-production-plugin/layer-imports
import '@/app/styles/index.scss';

export default {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
