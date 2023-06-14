import { memo, useState } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';
import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className, onSelect, selectedStars = 0, size = 30,
    } = props;

    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starCount);
            setCurrentStarCount(starCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={cn(cls.StarRating, {}, [className])}>
            {stars.map((star) => (
                <Icon
                    className={cn(
                        cls.starIcon,
                        {
                            [cls.hovered]: currentStarCount >= star,
                            [cls.selected]: isSelected,
                        },
                    )}
                    Svg={StarIcon}
                    key={star}
                    width={size}
                    height={size}
                    onMouseEnter={onHover(star)}
                    onMouseLeave={onLeave}
                    onClick={onClick(star)}
                />
            ))}
        </div>
    );
});
