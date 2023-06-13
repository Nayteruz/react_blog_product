/* eslint-disable react/jsx-props-no-spreading */
import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const {
        className, children, theme = CardTheme.OUTLINED, ...otherProps
    } = props;

    return (
        <div
            className={cn(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
