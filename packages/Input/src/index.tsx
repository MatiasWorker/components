import type { Status } from "@bxreact/theme";
import cs from "classnames";
import {
    InputHTMLAttributes,
    ReactNode,
    Ref,
    useCallback,
    useState,
} from "react";
import "./index.css";
import * as Icon from "@bxreact/icon";
export { FieldSwitch as Switch } from "@bxreact/field-switch";
export * from "./checkbox/checkbox";
export * from "./radio/radio";
export * from "./select/select";
export * from "./textarea/textarea";
export * from "./file/file";

type Props = {
    error?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: "sm" | "md";
    status?: Status;
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
    status,
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
            className={`${cs("bx-form-input", {
                "bx-form-input-container-disabled": disabled,
                "bx-form-input-invalid": error,
                "bx-form-input-fullwidth": fullWidth,
                "bx-form-input-container-focus": focused,
                "bx-form-input-container-md": size === "md",
                "bx-form-input-container-sm": size === "sm",
            })} bx-form-input--status-${status}`}
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

            {(rightIcon || status) && (
                <div className="bx-form-icon-container bx-form-icon-right">
                    {status ? (
                        <Icon.Warning size="1.5em"></Icon.Warning>
                    ) : (
                        rightIcon
                    )}
                </div>
            )}
        </div>
    );
}
