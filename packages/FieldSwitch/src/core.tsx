import { useState } from "react";
import "./core.css";

export function FieldSwitch({
    checked,
    onChange,
}: {
    checked: boolean;
    onChange?: (checked: boolean) => void;
}) {
    return (
        <div
            className={`field-switch ${checked ? "field-switch--checked" : ""}`}
            onClick={() => onChange && onChange(!checked)}
        >
            <div className="field-switch_circle"></div>
        </div>
    );
}
