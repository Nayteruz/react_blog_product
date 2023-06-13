import {
    ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Theme } from '../consts/consts';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme
    children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, initialTheme } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    const onRender = () => {
        document.body.className = defaultTheme;
    };

    useEffect(() => {
        onRender();
    }, []);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
