import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import ListBox from 'shared/ui/ListBox/ListBox';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile | null;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <VStack align="center" className={cn(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </VStack>
        );
    }

    if (error) {
        return (
            <VStack justify="center" className={cn(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </VStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="16" max className={cn(cls.ProfileCard, mods, [className])}>
            {data?.avatar
                  && (
                      <HStack justify="center" className={cls.avatarWrapper}>
                          <Avatar src={data?.avatar} alt="Аватар пользователя" />
                      </HStack>
                  )}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstName}
                readonly={readonly}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastName}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                type="number"
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
                direction="top"
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
                direction="top"
            />
        </VStack>
    );
};
