import { CSSProperties, useMemo } from 'react';

import { classNames as cn, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';
import UserIcon from '../../assets/icons/user-filled.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string
    src: string;
    size?: number;
    alt?: string;
    resize?: 'cover' | 'contain';
    fallbackInverted?: boolean;
}

export const Avatar = ({
    className, src, size = 100, alt, resize = 'contain', fallbackInverted,
}: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
        objectFit: resize,
    }), [size, resize]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            alt={alt}
            src={src}
            style={styles}
            className={cn(cls.Avatar, mods, [className])}
        />
    );
};
