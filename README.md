## Запуск проекта
```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме(не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов с CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация html отчета для скриншотных тестов
- `npm run storybook` - Запуск Storybook
- `npm run storybook:build` - Сборка Storybook билда
- `npm run prepare` - прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации FSD слайсов

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature slices design](https://feature-sliced.design/docs)

----

## Работа с переводами 

В проект используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуется установить плагин для phpstorm/vscode.

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используется 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library - `npm run test:unit`
3) Скриншотное тестирование с loki - `npm run test:ui`
4) e2e тестирование с Cypress - `npm run test:e2e`

Подробнее о тестах - [документация тестирования](/docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Так же для строго контроля главных архитектурных принципов используется собственный plugin *nayteruz-test-production-plugin*, который содержит 3 правила
1) path-cheker - запрешает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD(например widgets нельзя использовать в features и entities)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix.

## Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на север мокаются с помощью styrybook-addon-mock.

Файл со сторикейсами создаем рядом с компонентом с расширением .stories.tsx

Запустить storybook можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:
```typescript jsx
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

----

## Конфигурация проекта

Для разработки проект содержит 2 конфигурации

1. Webpack - ./config/build
2. Vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

- /config/babel - babel
- /config/build - конфигурция webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация storybook

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и storybook, линтинг.

В прекоммит хуках проверям проект линтерами, конфигурация находится в /.husky

----

## Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуются сущности, которые необходимо нормализоват с помощью EntityAdapter.

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (что бы не тянуть их в общий бандл) используется [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationList](/src/features/articleRecommendationsList)
- [authByUsername](/src/features/authByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [langSwitcher](/src/features/langSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [themeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
