import { useState, useRef, useEffect } from "react";
import "./core.css";

interface Props {
    value: string;
    onChange?: (value: string) => void;
}

export function FieldText({ value, onChange }: Props) {
    const [edit, setEdit] = useState<boolean>();
    const handlerToggleEdit = () => setEdit(!edit);
    const refInput = useRef<HTMLInputElement | null>();

    useEffect(() => {
        if (edit && refInput.current) {
            refInput.current.focus();
        }
    }, [edit]);

    return (
        <div className="field-text">
            <input
                className="field-text_input"
                onDoubleClick={handlerToggleEdit}
                disabled={!edit}
                value={value}
                ref={refInput}
                onInput={(event) =>
                    onChange && onChange(event.currentTarget.value)
                }
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
