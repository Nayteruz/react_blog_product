import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const options = useMemo(() => Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] })), []);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={cn('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
