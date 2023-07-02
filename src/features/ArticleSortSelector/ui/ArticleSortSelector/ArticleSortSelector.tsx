import { memo, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortFiled } from '@/entities/Article';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/Select';

import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortFiled;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortFiled) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;
    const { t } = useTranslation('article');

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortFiled>[]>(() => [
        {
            value: ArticleSortFiled.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortFiled.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortFiled.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);

    return (
        <div className={cn(cls.ArticleSortSelector, {}, [className])}>
            <Select
                label={t('Cортировать по')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('по')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
