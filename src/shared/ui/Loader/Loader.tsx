import { classNames as cn } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={cn(cls.waveLoader, {}, [className])}>
        <div />
        <div />
    </div>
);
