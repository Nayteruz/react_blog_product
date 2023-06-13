import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import ListBox from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { DropdownDirection } from '@/shared/types/ui';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
    direction: DropdownDirection;
}

export const CountrySelect = ({
    className, value, onChange, readonly, direction,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const options = useMemo(() => Object.entries(Country).map((val) => ({ value: val[0], content: val[1] })), []);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            className={cn('', {}, [className])}
            items={options}
            value={value}
            onChange={onChangeHandler}
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            readonly={readonly}
            direction={direction}
        />
    );
};
