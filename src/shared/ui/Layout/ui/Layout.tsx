import { FC, ReactNode } from 'react';

interface LayoutProps {
    className?: string;
    children: ReactNode;
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
