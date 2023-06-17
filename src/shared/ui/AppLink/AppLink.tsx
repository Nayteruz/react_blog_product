import { forwardRef, ReactNode } from 'react';

import { Link, LinkProps } from 'react-router-dom';

import { classNames as cn } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AppLink = forwardRef((props: AppLinkProps, ref) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        /* eslint-disable react/jsx-props-no-spreading */
        <Link
            to={to}
            className={cn(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
