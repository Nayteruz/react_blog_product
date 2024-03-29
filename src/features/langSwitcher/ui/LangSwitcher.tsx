import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import { langConfig } from './langConfig';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    center?: boolean;
}

export const LangSwitcher = memo(({ className, center }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const toggleTranslate = (lang: string) => i18n.changeLanguage(lang).then(() => {});

    return (
        <div className={cn(cls.LangSwitcher, { [cls.center]: center }, [className])}>
            {
                langConfig
                    .map(({ langLong, langShort, icon }) => (
                        <Button
                            key={langLong}
                            onClick={() => toggleTranslate(langShort)}
                            theme={ButtonTheme.CLEAR}
                            className={cn(cls.lang_icon)}
                        >
                            <img src={icon} alt={langLong} />
                        </Button>
                    ))
            }
        </div>
    );
});
