import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';

import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const location = useLocation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <li className={cls.item}>
            <AppLink
                to={item.path}
                className={cn(cls.link, { [cls.active]: location.pathname === item.path, [cls.collapsed]: collapsed }, [])}
            >
                <item.Icon className={cls.itemIcon} />
                <span>{t(item.text)}</span>
            </AppLink>
        </li>
    );
});
