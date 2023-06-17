import { memo } from 'react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

import cls from './NotificationList.module.scss';
import { useNotification } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { isLoading, data } = useNotification(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack gap="16" className={cn(cls.NotificationList, {}, [className])}>
                <Skeleton width="100%" border="8px" height="88px" />
                <Skeleton width="100%" border="8px" height="88px" />
                <Skeleton width="100%" border="8px" height="88px" />
            </VStack>
        );
    }

    return (
        <VStack gap="16" className={cn(cls.NotificationList, {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
