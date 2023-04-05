import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { useCallback, useMemo } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = ({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const options = useMemo(() => Object.entries(Country).map((val) => ({ value: val[0], content: val[1] })), []);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={cn('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
