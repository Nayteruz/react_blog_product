import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import {
    EditableProfileCardHeader,
} from '../../ui/EditableProfileCardHeader/EditableProfileCardHeader';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateError';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/ProfileSlice';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';

const reducers: ReducerList = {
    profile: profileReducer,
};

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

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
            <VStack gap="8" className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        key={err}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[err]}
                        data-testid="EditableProfileCard.Error"
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
            </VStack>
        </DynamicModuleLoader>
    );
});
