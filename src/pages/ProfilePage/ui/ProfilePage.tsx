import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import ProfileRating from '@/features/profileRating/ui/ProfileRating/ProfileRating';
import { getProfileError } from '@/features/editableProfileCard/model/selectors/getProfileError/getProfileError';
import { getProfileData } from '@/features/editableProfileCard/model/selectors/getProfileData/getProfileData';
import { getUserAuthData } from '@/entities/User';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{id:string}>();
    const error = useSelector(getProfileError);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const isOwner = authData?.id === profileData?.id;
    const hideRating = error || isOwner;

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
