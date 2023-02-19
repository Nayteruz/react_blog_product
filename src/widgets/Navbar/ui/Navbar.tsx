import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useLocation } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const location = useLocation();

    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <ul className={cls.links}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <li><AppLink to="/" className={location.pathname === '/' ? cls.active : ''}>Главная</AppLink></li>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <li><AppLink to="/about" className={location.pathname === '/about' ? cls.active : ''}>О сайте</AppLink></li>
            </ul>
        </div>
    );
};
