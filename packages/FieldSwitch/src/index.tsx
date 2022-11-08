import "./index.css";

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export function FieldSwitch({ checked, onChange }: Props): JSX.Element {
    return (
        <div
            className={`bx-field-switch ${
                checked ? "bx-field-switch--checked" : ""
            }`}
            onClick={() => onChange && onChange(!checked)}
        >
            <div className="bx-field-switch_circle"></div>
        </div>
    );
}
