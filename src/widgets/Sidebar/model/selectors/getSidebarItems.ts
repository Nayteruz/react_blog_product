import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import IconMain from '@/shared/assets/icons/main-20-20.svg';
import IconAbout from '@/shared/assets/icons/about-20-20.svg';
import IconProfile from '@/shared/assets/icons/profile-17-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Профиль',
                    Icon: IconProfile,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Статьи',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
