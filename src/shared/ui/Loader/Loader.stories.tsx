import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/shared/const/theme';

import { Loader } from './Loader';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
