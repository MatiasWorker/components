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
    const handlerToggleEdit = () => setEdit(!edit);
    const refInput = useRef<HTMLInputElement | null>();

    useEffect(() => {
        if (edit && refInput.current) {
            refInput.current.focus();
        }
    }, [edit]);

    return (
        <div
            className={`field-text field-text--${edited ? "edited" : status} ${
                edit ? "field-text--opened" : ""
            } ${className ? className : ""}`}
        >
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
