import cs from "classnames";
import { InputHTMLAttributes } from "react";
import "./checkbox.css";

export function Checkbox({
    disabled,
    checked,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label
            className={cs("bx-form-checkbox-container", {
                "bx-form--disabled": disabled,
                "bx-form-checkbox-container--disabled": disabled,
                "bx-form-checkbox-container--checked": checked,
            })}
        >
            <input
                {...props}
                className="bx-form-checkbox"
                type="checkbox"
                disabled={disabled}
                checked={checked}
                onChange={(event) => props?.onChange(event)}
            />
            <div className="bx-form-checkbox-icon">
                {checked && (
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path
                            d="M3.60837 7C3.49222 7 3.37982 6.9507 3.28989 6.84763L0.142513 3.24008C-0.041084 3.02945 -0.0485777 2.6799 0.127526 2.46031C0.303629 2.24072 0.595885 2.23175 0.779482 2.44238L3.59713 5.67798L8.20954 0.161332C8.38939 -0.0537772 8.68165 -0.0537772 8.8615 0.161332C9.04135 0.37644 9.04135 0.725992 8.8615 0.941101L3.93435 6.83867C3.84443 6.94622 3.72453 7 3.60837 7Z"
                            fill="white"
                        />
                    </svg>
                )}
            </div>
        </label>
    );
}
