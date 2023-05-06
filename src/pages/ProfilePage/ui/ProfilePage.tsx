import { classNames as cn } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{id:string}>();

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректные пользовательские данные'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректные данные возраста'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректные данные страны'),
        [ValidateProfileError.NO_DATA]: t('Данные отсутствуют'),
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
        [ValidateProfileError.INCORRECT_USER_AUTH]: t('Некорректные данные авторизации'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstName = useCallback((value?: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, first: value || '' }));
        }
    }, [dispatch, id]);

    const onChangeLastName = useCallback((value?: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, lastname: value || '' }));
        }
    }, [dispatch, id]);

    const onChangeAge = useCallback((value?: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, age: Number(value || 0) }));
        }
    }, [dispatch, id]);

    const onChangeCity = useCallback((value?: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, city: value || '' }));
        }
    }, [dispatch, id]);

    const onChangeUsername = useCallback((value?: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, username: value || '' }));
        }
    }, [dispatch, id]);

    const onChangeAvatar = useCallback((value?: string) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, avatar: value || '' }));
        }
    }, [dispatch, id]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, currency }));
        }
    }, [dispatch, id]);

    const onChangeCountry = useCallback((country?: Country) => {
        if (id) {
            dispatch(profileActions.updateProfile({ id, country }));
        }
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={cn('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
