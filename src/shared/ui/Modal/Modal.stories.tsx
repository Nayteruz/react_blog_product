import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line nayteruz-test-production-plugin/layer-imports
import '@/app/styles/index.scss';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dicta eligendi illo ipsa ipsum laborum, neque odit officia perspiciatis quis recusandae tenetur vel veritatis vitae! Ab accusantium ad amet aspernatur assumenda autem cupiditate deleniti doloremque ea earum eum excepturi fuga fugit harum hic in itaque iure laborum laudantium modi nihil non nulla, odio omnis perferendis porro quam quod rem repellat rerum, tempora tenetur unde vero! Consequuntur dolor eos ipsum nobis porro! Aut corporis dolores ea, labore minus nihil ratione repudiandae tempora tenetur. Ea excepturi molestias nam necessitatibus perferendis? Beatae commodi ea eligendi eum fugiat possimus rem sed vero? Esse!',
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deserunt dicta eligendi illo ipsa ipsum laborum, neque odit officia perspiciatis quis recusandae tenetur vel veritatis vitae! Ab accusantium ad amet aspernatur assumenda autem cupiditate deleniti doloremque ea earum eum excepturi fuga fugit harum hic in itaque iure laborum laudantium modi nihil non nulla, odio omnis perferendis porro quam quod rem repellat rerum, tempora tenetur unde vero! Consequuntur dolor eos ipsum nobis porro! Aut corporis dolores ea, labore minus nihil ratione repudiandae tempora tenetur. Ea excepturi molestias nam necessitatibus perferendis? Beatae commodi ea eligendi eum fugiat possimus rem sed vero? Esse!',
};
DarkMode.decorators = [ThemeDecorator(Theme.DARK)];
