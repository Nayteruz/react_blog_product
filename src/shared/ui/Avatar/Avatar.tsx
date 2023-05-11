import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src: string;
    size?: number;
    alt?: string;
    resize?: 'cover' | 'contain';
}

export const Avatar = ({
    className, src, size, alt, resize = 'contain',
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
        objectFit: resize,
    }), [size, resize]);

    return (
        <img
            alt={alt}
            src={src}
            style={styles}
            className={cn(cls.Avatar, mods, [className])}
        />
    );
};
