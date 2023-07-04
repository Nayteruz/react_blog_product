##Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на север мокаются с помощью styrybook-addon-mock.

Файл со сторикейсами создаем рядом с компонентом с расширением .stories.tsx

Запустить storybook можно командой:
- `npm run storybook`

Подробнее [Storybook документация](https://storybook.js.org/docs/react/get-started/install/)

Пример:
```
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';

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
    theme: ButtonTheme.CLEAR,
};
```