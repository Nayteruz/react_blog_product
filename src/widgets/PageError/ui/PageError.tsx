import { useTranslation } from 'react-i18next';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={cn(cls.PageError, {}, [className])}>
            <h2>{t('Произошла непредвиденная ошибка')}</h2>
            <Button className={cls.errorButton} onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
