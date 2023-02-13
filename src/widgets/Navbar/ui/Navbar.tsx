import cls from "./Navbar.module.scss"
import {classNames as cn} from "shared/lib/classNames/classNames";
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}


export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={cn(cls.Navbar, {}, [className])}>
            <ul className={cls.links}>
                <li><AppLink to="/">Главная</AppLink></li>
                <li><AppLink to="/about">О сайте</AppLink></li>
            </ul>
        </div>
    );
};
