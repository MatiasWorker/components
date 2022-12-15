import { Down } from "@bxreact/icon";
import cs from "classnames";
import { SelectHTMLAttributes, ReactNode, useCallback, useState } from "react";
import "./index.css";
export * from "./Checkbox";
export * from "./Radio";
export * from "./Textarea";

type Props = {
    error?: boolean;
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: "sm" | "md";
    fill?: string;
    options?: { value: string; label: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export function Select({
    placeholder,
    error,
    fullWidth,
    leftIcon,
    rightIcon,
    size,
    options,
    disabled,
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
            className={cs("bx-form-input bx-form-input-type-select", {
                "bx-form-input-container-disabled": disabled,
                "bx-form-input-invalid": error,
                "bx-form-input-fullwidth": fullWidth,
                "bx-form-input-container-focus": focused,
                "bx-form-input-container-md": size === "md",
                "bx-form-input-container-sm": size === "sm",
            })}
        >
            <select
                className="bx-form-input-select"
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                {...props}
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
        </div>
    );
}
