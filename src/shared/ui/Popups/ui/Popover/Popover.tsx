import { memo, ReactNode } from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { classNames as cn } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

const Popover = memo((props: PopoverProps) => {
    const {
        className, trigger, direction = 'bottom right', children,
    } = props;

    const menuClasses = [popupCls[direction.split(' ').join('-')]];

    return (
        <HPopover className={cn(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

            <HPopover.Panel className={cn(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});

export default Popover;
