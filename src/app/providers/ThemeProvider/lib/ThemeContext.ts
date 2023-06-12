import { createContext } from 'react';
import { Theme } from '../consts/consts';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX = 'article_list_item_idx';
