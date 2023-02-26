import { classNames as cn } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import Portal from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onCLose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onCLose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const handleCLose = useCallback(() => {
        if (onCLose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onCLose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onCLose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.code === 'Escape') {
            handleCLose();
        }
    }, [handleCLose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={cn(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={handleCLose}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
