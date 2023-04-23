import { memo } from 'react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={cn(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={24} width={100} />
                </div>
                <Skeleton width="75%" height={24} />
                <Skeleton width="90%" height={24} />
                <Skeleton width="50%" height={24} />
            </div>
        );
    }

    return (
        <div className={cn(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user?.avatar && <Avatar src={comment.user!.avatar} size={30} />}
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});
