// <Адрес страницы, позиция скорола>
export type ScrollSchema = Record<string, number>

export interface ScrollState {
    [key: string]: number;
}

export interface UISchema {
    scroll: ScrollState;
}
