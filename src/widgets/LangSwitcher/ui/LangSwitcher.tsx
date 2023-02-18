import { classNames as cn } from 'shared/lib/classNames/classNames';
import { Button, themeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { langConfig } from './langConfig';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleTranslate = (lang: string): void => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={cn(cls.LangSwitcher, {}, [className])}>
            {
                langConfig
                    .map(({ langLong, langShort, icon }) => (
                        <Button
                            key={langLong}
                            onClick={() => toggleTranslate(langShort)}
                            theme={themeButton.CLEAR}
                            className={cn(cls.lang_icon)}
                        >
                            <img src={icon} alt={langLong} />
                        </Button>
                    ))
            }
        </div>
    );
};
