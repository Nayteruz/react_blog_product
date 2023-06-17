import enIcon from '@/shared/assets/icons/en.png';
import ruIcon from '@/shared/assets/icons/ru.png';

export interface langItem {
    langShort: string;
    langLong: string;
    icon: '*.png';
}

export const langConfig: langItem[] = [
    { langLong: 'Русский', langShort: 'ru', icon: ruIcon },
    { langLong: 'English', langShort: 'en', icon: enIcon },
];

export const testArt = [1, 2, 4];
