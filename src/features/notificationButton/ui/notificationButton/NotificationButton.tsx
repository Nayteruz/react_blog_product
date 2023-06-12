import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={cn(cls.NotificationButton, {}, [className])}
            trigger={(
                <span>
                    <Icon Svg={NotificationIcon} inverted />
                </span>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
