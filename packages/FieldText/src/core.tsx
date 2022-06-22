import { useState } from "react";
import * as Atoms from "./atoms";

export function FieldText() {
    const [checked, setChecked] = useState<boolean>();
    return (
        <Atoms.Switch
            checked={checked}
            onClick={() => setChecked(!checked)}
        ></Atoms.Switch>
    );
}
