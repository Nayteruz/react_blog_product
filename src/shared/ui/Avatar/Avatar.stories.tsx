import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { StoryDecorator } from 'shared/config/storybook/StoryDecorator/StoryDecorator';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/test/avatar-example.png';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarImg,
    alt: 'avatar',
};
Primary.decorators = [StoryDecorator({})];

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImg,
    alt: 'avatar',
};
Small.decorators = [StoryDecorator({})];
