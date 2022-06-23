import { useState } from "react";
import "./core.css";

export function FieldSwitch() {
    const [checked, setChecked] = useState<boolean>();
    return (
        <div
            className={`field-switch ${checked ? "field-switch--checked" : ""}`}
            onClick={() => setChecked(!checked)}
        >
            <div className="field-switch_circle"></div>
        </div>
    );
}
