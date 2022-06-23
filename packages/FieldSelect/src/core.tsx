import "./core.css";

interface Props {
    value: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    options: { value: string; label: string }[];
}

export function FieldSelect({
    value,
    placeholder,
    options = [],
    onChange,
}: Props) {
    return (
        <div className="field-select">
            <svg
                className="field-select_icon"
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
            >
                <path
                    d="M14.3215 0.97836C14.0343 0.696178 13.5809 0.696178 13.2937 0.97836L7.64797 6.52545L1.75287 0.970934C1.46567 0.696178 1.00464 0.703604 0.732562 0.993211C0.46048 1.28282 0.46048 1.72837 0.755235 1.9957L7.15671 8.03289C7.30031 8.16656 7.48169 8.23339 7.66308 8.23339C7.85203 8.23339 8.03341 8.16656 8.17701 8.02547L14.3215 1.98827C14.6012 1.70609 14.6012 1.26054 14.3215 0.97836Z"
                    fill="var(--select-icon-color)"
                />
            </svg>
            <select
                className="field-select_select"
                onChange={(event) => {
                    onChange && onChange(event.currentTarget.value);
                }}
            >
                {placeholder && (
                    <option value="" selected disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option
                        value={option.value}
                        selected={value === option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
