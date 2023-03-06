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
    options?: { value: string; label: string; disabled?: boolean }[];
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

    const [withValue, setWithValue] = useState<boolean>(!!props.value);

    const handleFocus = useCallback(() => {
        setFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
        setFocused(false);
    }, []);

    useEffect(() => {
        setWithValue(!!props.value);
    }, [props.value]);

    const withValidValue =
        withValue && options.some(({ value }) => value === props.value);

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
                    withValidValue ? "bx-form-input-select--with-value" : ""
                }`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                value={withValidValue ? props.value : ""}
                onChange={(event) => {
                    setWithValue(true);
                    props?.onChange(event);
                }}
            >
                {placeholder && (
                    <option
                        key="placeholder"
                        value=""
                        disabled
                        selected={!withValidValue}
                    >
                        {placeholder}
                    </option>
                )}
                {options.map((option, i) => (
                    <option
                        key={i}
                        value={option.value}
                        disabled={option.disabled}
                    >
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
