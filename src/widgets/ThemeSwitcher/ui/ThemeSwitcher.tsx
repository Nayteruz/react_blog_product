import cls from "./ThemeSwitcher.module.scss"
import {classNames as cn} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import SwitcherIcon from "shared/assets/icons/icon_theme.svg";
import {Theme} from "app/providers/ThemeProvider";
import {Button, themeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={themeButton.CLEAR}
            className={cn(cls.ThemeSwitcher, {}, [className])}
        >
            <SwitcherIcon className={cls.icon} />
        </Button>
    );
};
