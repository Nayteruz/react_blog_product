import { useTranslation } from 'react-i18next';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import ListBox from 'shared/ui/Popups/ui/ListBox/ListBox';
import { DropdownDirection } from 'shared/types/ui';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
    direction: DropdownDirection;
}

export const CurrencySelect = memo(({
    className, value, onChange, readonly, direction,
}: CurrencySelectProps) => {
    const { t } = useTranslation('profile');

    const options = useMemo(() => Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] })), []);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={cn('', {}, [className])}
            items={options}
            value={value}
            onChange={onChangeHandler}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            readonly={readonly}
            direction={direction}
        />
    );
});
