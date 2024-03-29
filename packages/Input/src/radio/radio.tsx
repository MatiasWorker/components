import cs from "classnames";
import { InputHTMLAttributes } from "react";
import "./radio.css";

export function Radio({
    disabled,
    checked,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label
            className={cs("bx-form-radio-container", {
                "bx-form--disabled": disabled,
                "bx-form-radio-container--disabled": disabled,
                "bx-form-radio-container--checked": checked,
            })}
        >
            <input
                {...props}
                className="bx-form-radio"
                type="radio"
                disabled={disabled}
                checked={checked}
                onChange={(event) => props?.onChange(event)}
            />
            <div className="bx-form-radio-icon">
                <div className="bx-form-radio-dot"></div>
            </div>
        </label>
    );
}
