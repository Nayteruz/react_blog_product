import { FC } from 'react';

interface LayoutProps {
    className?: string
}

export const Layout: FC<LayoutProps> = (props) => {
    const {
        className,
        children,
    } = props;

    return (
        <div className={className}>
            {children}
        </div>
    );
};
