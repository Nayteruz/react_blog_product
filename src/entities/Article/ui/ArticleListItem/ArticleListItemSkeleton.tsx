import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
        return (
            <div className={cn('', {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width={50} height={16} className={cls.username} />
                        <Skeleton width={80} height={16} className={cls.date} />
                    </div>
                    <Skeleton width={350} height={32} className={cls.title} />
                    <Skeleton width={250} height={24} className={cls.types} />
                    <Skeleton width="100%" height={250} className={cls.img} />
                    <Skeleton width={300} height={30} className={cls.mb5} />
                    <Skeleton width="100%" height={20} className={cls.mb5} />
                    <Skeleton width="70%" height={20} className={cls.mb5} />
                    <Skeleton width="100%" height={20} className={cls.mb5} />
                    <Skeleton width="90%" height={20} className={cls.mb5} />
                    <Skeleton width="50%" height={20} className={cls.mb5} />
                    <Skeleton width="75%" height={20} className={cls.mb5} />
                    <div className={cls.footer}>
                        <Skeleton width={130} height={38} />
                        <Skeleton width={35} height={24} className={cls.views} />
                        <Skeleton width={20} height={20} border="40%" />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={cn('', {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                    <Skeleton width={50} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
});