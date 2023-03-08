import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import IconAbout from 'shared/assets/icons/about-20-20.svg';
import IconMain from 'shared/assets/icons/main-20-20.svg';
import IconProfile from 'shared/assets/icons/profile-17-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: IconMain,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: IconAbout,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: IconProfile,
    },
];
