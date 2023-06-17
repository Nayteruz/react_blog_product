import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';
import {
    EditableProfileCard,
    getProfileError,
    getProfileData,
    getProfileIsLoading,
} from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id:string}>();
    const error = useSelector(getProfileError);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const isOwner = authData?.id === profileData?.id;
    const hideRating = error || isOwner || isLoading;

    return (
        <Page className={cn('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                {!hideRating && <ProfileRating profileId={id} />}
            </VStack>
        </Page>
    );
};
export default ProfilePage;
