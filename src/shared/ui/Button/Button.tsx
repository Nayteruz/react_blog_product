import cls from "./Button.module.scss"
import {classNames as cn} from "shared/lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";

export enum themeButton {
    CLEAR = 'clear',

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: themeButton;
}

export const Button:FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={cn(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
