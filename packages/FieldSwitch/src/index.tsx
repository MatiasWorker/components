import "./index.css";

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export function FieldSwitch({ checked, onChange }: Props): JSX.Element {
    return (
        <div
            className={`field-switch ${checked ? "field-switch--checked" : ""}`}
            onClick={() => onChange && onChange(!checked)}
        >
            <div className="field-switch_circle"></div>
        </div>
    );
}
