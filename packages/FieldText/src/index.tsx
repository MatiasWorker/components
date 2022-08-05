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
    doubleClick?: boolean;
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
    doubleClick,
}: Props): JSX.Element {
    const [edit, setEdit] = useState<boolean>();
    const [edited, setEdited] = useState<boolean>();
    const handlerToggleEdit = () => setEdit(!edit);
    const refInput = useRef<HTMLInputElement | null>();

    useEffect(() => {
        if (edit && refInput.current) {
            refInput.current.focus();
        }
    }, [edit]);

    const resize = useResizeObserver<HTMLDivElement>();

    const handlerTrigger = {
        [doubleClick ? "onDoubleClick" : "onClick"]: handlerToggleEdit,
    };

    return (
        <div
            className={`field-text field-text--${edited ? "edited" : status} ${
                edit ? "field-text--opened" : ""
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
                className="field-text_input"
                disabled={!edit}
                value={value}
                ref={refInput}
                type={type}
                minLength={minLength}
                maxLength={maxLength}
                min={min}
                max={max}
                onInput={(event) => {
                    setEdited(true);
                    onChange && onChange(event.currentTarget.value);
                }}
            />
            {!edit && (
                <div className="field-text_mask" {...handlerTrigger}></div>
            )}
        </div>
    );
}
