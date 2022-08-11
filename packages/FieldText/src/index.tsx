import { useState, useRef, useEffect } from "react";
import useResizeObserver from "use-resize-observer";
import "./index.css";

interface Props {
    value: string;
    type?: string;
    className?: string;
    onChange?: (value: string) => void;
    status?: "success" | "warning" | "danger" | "";
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    disabled?: boolean;
}

export function FieldText({
    value,
    type,
    className,
    onChange,
    minLength,
    maxLength,
    min,
    max,
    status = "",
    disabled,
}: Props): JSX.Element {
    const [focus, setFocus] = useState<boolean>();
    const [edited, setEdited] = useState<boolean>();
    const refInput = useRef<HTMLInputElement | null>();

    const resize = useResizeObserver<HTMLDivElement>();

    return (
        <div
            className={`field-text field-text--${edited ? "edited" : status} ${
                focus ? "field-text--focus" : ""
            } ${className ? className : ""}`}
            style={
                resize.width
                    ? ({ "--min-width": `${resize.width}px` } as any)
                    : {}
            }
        >
            <div
                ref={resize.ref}
                className="field-text_input field-text_reflect"
            >
                {value}
            </div>
            <input
                disabled={disabled}
                className="field-text_input"
                value={value}
                ref={refInput}
                type={type}
                minLength={minLength}
                maxLength={maxLength}
                min={min}
                max={max}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onInput={(event) => {
                    setEdited(true);
                    onChange && onChange(event.currentTarget.value);
                }}
            />
        </div>
    );
}
