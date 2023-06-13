import { memo } from 'react';
import { classNames as cn } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TileIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SIMPLE,
        icon: TileIcon,
        limit: 9,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
        limit: 4,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const selectView = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={cn(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={selectView(viewType.view)}
                    className={cn(cls.buttons, { [cls.active]: viewType.view === view })}
                >
                    <Icon
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
});
