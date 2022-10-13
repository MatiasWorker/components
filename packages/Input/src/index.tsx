import { ReactNode, InputHTMLAttributes, useState, useCallback } from "react";
import "./index.css";
import cs from "classnames";

type Props = {
    type?:
        | "text"
        | "email"
        | "password"
        | "search"
        | "number"
        | "date"
        | string;
    error?: boolean;
    form?: string;
    name?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    inputSize?: "sm" | "md";
    fill?: string;
    ref?: any;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
    type,
    value,
    onChange,
    id,
    readOnly,
    disabled,
    placeholder,
    required,
    form,
    name,
    error,
    fullWidth,
    leftIcon,
    rightIcon,
    inputSize,
    fill,
    ...props
}: Props) {
    const [focused, setFocused] = useState(false);
    const handleFocus = useCallback(() => {
        setFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
        setFocused(false);
    }, []);
    return (
        <div
            className={cs("form-input", {
                "form-input-container-disabled": disabled,
                "form-input-invalid": error,
                "form-input-fullwidth": fullWidth,
                "form-input-container-focus": focused,
                "form-input-container-md": inputSize === "md",
                "form-input-container-sm": inputSize === "sm",
                "form-input-container-fill": fill,
            })}
        >
            {leftIcon && (
                <div className="form-icon-container form-icon-left">
                    {leftIcon}
                </div>
            )}
            <input
                className={cs("form-input-text form-input-with-icon", {
                    "form-input-fullwidth": fullWidth,
                })}
                type={type}
                value={value}
                onChange={onChange}
                id={id}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={placeholder}
                required={required}
                form={form}
                name={name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...props}
            />
            {rightIcon && (
                <div className="form-icon-container form-icon-right">
                    {rightIcon}
                </div>
            )}
        </div>
    );
}