import { useState, useCallback, TextareaHTMLAttributes } from "react";
import cs from "classnames";

type Props = {
    id?: string;
    error?: boolean;
    disabled?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
    value,
    onChange,
    id,
    error,
    disabled,
    placeholder,
    form,
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
            className={cs("bx-form-textarea-container", {
                "bx-form-textarea-container-disabled": disabled,
                "bx-form-textarea-container-error": error,
                "bx-form-textarea-container-focus": focused,
            })}
        >
            <textarea
                className="bx-form-textarea"
                value={value}
                onChange={onChange}
                id={id}
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder}
                form={form}
                {...props}
            />
        </div>
    );
}
