import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <AppLink to={RoutePath.main}>
                {t('Главная')}
            </AppLink>
        </div>
    );
};
