import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppImage } from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    src: 'https://pngicon.ru/file/uploads/vinni-pukh-v-png.png',
    alt: '',
    width: 200,
    height: 200,
};
