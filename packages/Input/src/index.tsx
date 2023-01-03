import {
    ReactNode,
    InputHTMLAttributes,
    useState,
    useCallback,
    Ref,
} from "react";
import "./index.css";
import cs from "classnames";
export * from "./textarea/textarea";
export * from "./checkbox/checkbox";
export * from "./radio/radio";
export * from "./select/select";

type Props = {
    error?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: "sm" | "md";
    reference?: Ref<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
    disabled,
    error,
    fullWidth,
    leftIcon,
    rightIcon,
    size,
    reference,
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
                "bx-form-input-container-md": size === "md",
                "bx-form-input-container-sm": size === "sm",
            })}
        >
            {leftIcon && (
                <div className="bx-form-icon-container bx-form-icon-left">
                    {leftIcon}
                </div>
            )}

            <input
                {...props}
                className={cs("bx-form-input-text bx-form-input-with-icon", {
                    "bx-form-input-fullwidth": fullWidth,
                })}
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={reference}
                onChange={(event) => props?.onChange(event)}
            />

            {rightIcon && (
                <div className="bx-form-icon-container bx-form-icon-right">
                    {rightIcon}
                </div>
            )}
        </div>
    );
}
