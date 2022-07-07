import { useState, useRef, useEffect } from "react";
import "./index.css";

interface Props {
    value: string;
    onChange?: (value: string) => void;
    status?: "success" | "warning" | "danger" | "";
}

export function FieldText({
    value,
    onChange,
    status = "",
}: Props): JSX.Element {
    const [edit, setEdit] = useState<boolean>();
    const handlerToggleEdit = () => setEdit(!edit);
    const refInput = useRef<HTMLInputElement | null>();

    useEffect(() => {
        if (edit && refInput.current) {
            refInput.current.focus();
        }
    }, [edit]);

    return (
        <div className={`field-text field-text--${status}`}>
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
