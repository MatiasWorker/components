import { useState, useRef, useEffect } from "react";
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
}: Props): JSX.Element {
    const [edit, setEdit] = useState<boolean>();
    const [edited, setEdited] = useState<boolean>();
    const [minWidth, setMinWidth] = useState<number>();
    const handlerToggleEdit = () => setEdit(!edit);
    const refInput = useRef<HTMLInputElement | null>();
    const refReflect = useRef<HTMLDivElement | null>();

    useEffect(() => {
        if (edit && refInput.current) {
            refInput.current.focus();
        }
    }, [edit]);

    useEffect(() => {
        setMinWidth(Math.ceil(refReflect.current?.clientWidth || 0));
    }, [value]);

    return (
        <div
            className={`field-text field-text--${edited ? "edited" : status} ${
                edit ? "field-text--opened" : ""
            } ${className ? className : ""}`}
            style={minWidth ? ({ "--min-width": `${minWidth}px` } as any) : {}}
        >
            <div
                ref={refReflect}
                className="field-text_input field-text_reflect"
            >
                {value}
            </div>
            <input
                className="field-text_input"
                onDoubleClick={handlerToggleEdit}
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
                <div
                    className="field-text_mask"
                    onDoubleClick={handlerToggleEdit}
                ></div>
            )}
        </div>
    );
}
