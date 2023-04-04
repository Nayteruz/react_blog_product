import { classNames as cn, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        /* eslint-disable react/jsx-props-no-spreading */
        <label className={cn(cls.InputWrapper, mods, [className])}>
            { placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}:`}
                </div>
            )}
            <input
                ref={inputRef}
                className={cls.input}
                type={type}
                value={value}
                placeholder={placeholder || ''}
                onChange={onChangeHandler}
                readOnly={readonly}
                {...otherProps}
            />
        </label>

    );
});
