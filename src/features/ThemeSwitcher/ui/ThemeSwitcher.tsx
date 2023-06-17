import { memo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import SwitcherIcon from '@/shared/assets/icons/icon_theme.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
            className={cn(cls.ThemeSwitcher, {}, [className])}
        >
            <SwitcherIcon className={cls.icon} />
        </Button>
    );
});
