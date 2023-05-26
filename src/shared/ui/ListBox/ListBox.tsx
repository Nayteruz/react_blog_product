import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames as cn } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack/HStack/HStack';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

export type DropdownDirection = 'top' | 'bottom';

interface ListBoxProps {
    items?: ListBoxItem[]
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
}

const ListBox = (props: ListBoxProps) => {
    const {
        items, className, value, defaultValue, onChange, label, readonly, direction = 'bottom',
    } = props;

    const optionsClasses = [cls[direction]];

    return (
        <HStack align="center" gap="8">
            { label && <span className={cls.label}>{label}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={cn(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={cls.trigger}>{value ?? defaultValue}</HListBox.Button>
                <HListBox.Options className={cn(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={cn(cls.item, {
                                        [cls.active]: active,
                                        [cls.selected]: selected,
                                        [cls.disabled]: item.disabled,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};

export default ListBox;
