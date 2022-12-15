import { useState, useCallback, TextareaHTMLAttributes } from "react";
import cs from "classnames";

type Props = {
    id?: string;
    error?: boolean;
    disabled?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ error, disabled, form, ...props }: Props) {
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
                {...props}
                className="bx-form-textarea"
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(event) => props?.onChange(event)}
            />
        </div>
    );
}
