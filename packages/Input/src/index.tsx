import { ReactNode, InputHTMLAttributes, useState, useCallback } from "react";
import "./index.css";
import cs from "classnames";
import { Down } from "@bxreact/icon";
export * from "./Textarea";

type Props = {
    type?:
        | "text"
        | "email"
        | "password"
        | "search"
        | "number"
        | "select"
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
    options?: { value: string; label: string }[];
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
    options,
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
            className={cs("bx-form-input", {
                "bx-form-input-container-disabled": disabled,
                "bx-form-input-invalid": error,
                "bx-form-input-fullwidth": fullWidth,
                "bx-form-input-container-focus": focused,
                "bx-form-input-container-md": inputSize === "md",
                "bx-form-input-container-sm": inputSize === "sm",
                "bx-form-input-container-fill": fill,
                "bx-form-input-type-select": type === "select",
            })}
        >
            {leftIcon && (
                <div className="bx-form-icon-container bx-form-icon-left">
                    {leftIcon}
                </div>
            )}
            {type === "select" ? (
                <>
                    <select
                        className="bx-form-input-select"
                        name={name}
                        value={value || ""}
                        onChange={onChange as any}
                    >
                        {placeholder && (
                            <option key="placeholder" value="" disabled>
                                {placeholder}
                            </option>
                        )}
                        {options.map((option, i) => (
                            <option key={i} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="bx-form-input-select_icon">
                        <Down size="1em" color="lblue-well"></Down>
                    </div>
                </>
            ) : (
                <input
                    className={cs(
                        "bx-form-input-text bx-form-input-with-icon",
                        {
                            "bx-form-input-fullwidth": fullWidth,
                        }
                    )}
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
            )}

            {rightIcon && (
                <div className="bx-form-icon-container bx-form-icon-right">
                    {rightIcon}
                </div>
            )}
        </div>
    );
}
