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
    max?: boolean;
}

export const Card = memo((props: CardProps) => {
    const {
        className, children, theme = CardTheme.OUTLINED, max, ...otherProps
    } = props;

    return (
        <div
            className={cn(cls.Card, { [cls.max]: max }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
