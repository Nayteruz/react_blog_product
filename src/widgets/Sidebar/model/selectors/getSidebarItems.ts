import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import IconAbout from '@/shared/assets/icons/about-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import IconMain from '@/shared/assets/icons/main-20-20.svg';
import IconProfile from '@/shared/assets/icons/profile-17-20.svg';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная',
                Icon: IconMain,
            },
            {
                path: getRouteAbout(),
                text: 'О сайте',
                Icon: IconAbout,
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Профиль',
                    Icon: IconProfile,
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    text: 'Статьи',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
