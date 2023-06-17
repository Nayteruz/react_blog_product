import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoryDecorator, ThemeDecorator } from '@/shared/config/storybook';
import { Page } from './Page';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widget/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoryDecorator({})],
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <div>Тестовое наполнение</div>,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <div>Тестовое наполнение</div>,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
