import {
    DetailedHTMLProps, HtmlHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between' | 'stretch';
export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'stretch';
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexGap = '4' | '8' | '16' | '32';

type DivProps = Omit<DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

const justifyClasses: Record<FlexJustify, string> = {
    'flex-start': cls.justifyStart,
    'flex-end': cls.justifyEnd,
    center: cls.justifyCenter,
    'space-around': cls.justifyAround,
    'space-between': cls.justifyBetween,
    stretch: cls.justifyStretch,
};

const alignClasses: Record<FlexAlign, string> = {
    'flex-start': cls.alignStart,
    'flex-end': cls.alignEnd,
    center: cls.alignCenter,
    stretch: cls.alignStretch,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    'row-reverse': cls.directionRowReverse,
    column: cls.directionColumn,
    'column-reverse': cls.directionColumnReverse,
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export const Flex = memo((props: FlexProps) => {
    const {
        className,
        children,
        justify = 'flex-start',
        align = 'center',
        direction = 'row',
        gap,
        max,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={cn(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
});
