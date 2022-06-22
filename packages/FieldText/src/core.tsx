import { useState, useRef, useEffect } from "react";
import * as Atoms from "./atoms";

interface Props {
    value: string;
    onChange?: (value: string) => void;
}

export function FieldText({ value, onChange }: Props) {
    const [edit, setEdit] = useState<boolean>();
    const handlerToggleEdit = () => setEdit(!edit);
    const refInput = useRef<HTMLInputElement | null>();

    useEffect(() => {
        if (edit) {
            refInput.current.focus();
        }
    }, [edit]);

    return (
        <Atoms.Text>
            <Atoms.Input
                onDoubleClick={handlerToggleEdit}
                disabled={!edit}
                value={value}
                ref={refInput}
                onInput={(event) =>
                    onChange && onChange(event.currentTarget.value)
                }
            ></Atoms.Input>
            {!edit && (
                <Atoms.Mask onDoubleClick={handlerToggleEdit}></Atoms.Mask>
            )}
        </Atoms.Text>
    );
}
