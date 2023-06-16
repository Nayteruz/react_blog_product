import { lazy, Suspense } from 'react';
import { ProfileRatingProps } from './ProfileRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

const ProfileRatingLazy = lazy(
    () => import('./ProfileRating'),
);

export const ArticleRatingAsync = (props: ProfileRatingProps) => {
    /* eslint-disable react/jsx-props-no-spreading */
    return (
        <Suspense fallback={<Skeleton width="100%" height={120} />}>
            <ProfileRatingLazy {...props} />
        </Suspense>
    );
};
