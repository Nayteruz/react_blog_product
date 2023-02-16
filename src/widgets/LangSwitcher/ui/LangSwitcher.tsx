import cls from "./LangSwitcher.module.scss"
import {classNames as cn} from "shared/lib/classNames/classNames";
import {Button, themeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import en_icon from "shared/assets/icons/en.png";
import ru_icon from "shared/assets/icons/ru.png";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const { t, i18n } = useTranslation();

    const toggleTranslate = (lang: string): void => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className={cn(cls.LangSwitcher, {}, [className])}>
            <Button
                onClick={() => toggleTranslate('ru')}
                theme={themeButton.CLEAR}
                className={cn(cls.lang_icon)}
            >
                <img src={ru_icon} alt="Русский"/>
            </Button>
            <Button
                onClick={() => toggleTranslate('en')}
                theme={themeButton.CLEAR}
                className={cn(cls.lang_icon)}
            >
                <img src={en_icon} alt="English"/>
            </Button>
        </div>
    );
};
