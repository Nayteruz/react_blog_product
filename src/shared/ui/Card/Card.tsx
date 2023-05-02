import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <div
            className={cn(cls.Card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});