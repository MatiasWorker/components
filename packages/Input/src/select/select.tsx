import { Down } from "@bxreact/icon";
import cs from "classnames";
import {
    SelectHTMLAttributes,
    ReactNode,
    useCallback,
    useState,
    useEffect,
} from "react";

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

    const [value, setValue] = useState<boolean>(!!props.value);

    const handleFocus = useCallback(() => {
        setFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
        setFocused(false);
    }, []);

    useEffect(() => {
        setValue(!!props.value);
    }, [props.value]);

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
                {...props}
                className={`bx-form-input-select ${
                    value ? "bx-form-input-select--with-value" : ""
                }`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                onChange={(event) => {
                    setValue(true);
                    props?.onChange(event);
                }}
            >
                {placeholder && (
                    <option
                        key="placeholder"
                        value=""
                        disabled
                        selected={!value}
                    >
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
