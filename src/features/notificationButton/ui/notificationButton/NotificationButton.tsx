import { memo, useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import Drawer from 'shared/ui/Drawer/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <span onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} inverted />
        </span>
    );

    return (
        <div>
            {!isTabletOrMobile && (
                <Popover
                    className={cn(cls.NotificationButton, {}, [className])}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            )}
            {isTabletOrMobile && (
                <>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </>
            )}
        </div>

    );
});
