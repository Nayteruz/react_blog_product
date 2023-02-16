import { classNames as cn } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={cn(cls.Navbar, {}, [className])}>

        <ul className={cls.links}>
            <li><AppLink to="/">Главная</AppLink></li>
            <li><AppLink to="/about">О сайте</AppLink></li>
        </ul>
    </div>
);
