import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import IconAbout from 'shared/assets/icons/about-20-20.svg';
import IconMain from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    const onToggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={cn(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <ul className={cls.items}>
                <li className={cls.item}>
                    <AppLink
                        to={RoutePath.main}
                        className={cn(cls.link, { [cls.active]: location.pathname === RoutePath.main }, [])}
                    >
                        <IconMain className={cls.itemIcon} />
                        <span>{t('Главная')}</span>
                    </AppLink>
                </li>
                <li className={cls.item}>
                    <AppLink
                        to={RoutePath.about}
                        className={cn(cls.link, { [cls.active]: location.pathname === RoutePath.about }, [])}
                    >
                        <IconAbout className={cls.itemIcon} />
                        <span>{t('О сайте')}</span>
                    </AppLink>
                </li>
            </ul>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cn(cls.collapseBtn)}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher center={collapsed} />
            </div>
        </div>
    );
};
