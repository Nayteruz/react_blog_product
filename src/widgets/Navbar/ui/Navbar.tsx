import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <ul className={cls.links}>
                <li>
                    <AppLink to="/" className={location.pathname === '/' ? cls.active : ''}>
                        {t('Главная')}
                    </AppLink>
                </li>
                <li>
                    <AppLink to="/about" className={location.pathname === '/about' ? cls.active : ''}>
                        {t('О сайте')}
                    </AppLink>
                </li>
            </ul>
        </div>
    );
};
