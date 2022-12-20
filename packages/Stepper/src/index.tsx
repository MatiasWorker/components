import { ReactChild, useRef, useState } from "react";
import "@bxreact/theme";
import useResizeObserver from "use-resize-observer";
import "./index.css";

export interface Props {
    options: { label: string; value?: number | string }[];
    value: number | string;
    onChange?: (step: number | string) => void;
}

function StepLabel({
    children,
    onResize,
}: {
    children: ReactChild;
    onResize: (value: {
        width: number | undefined;
        height: number | undefined;
    }) => void;
}) {
    const ref = useRef();
    useResizeObserver({ ref, onResize });
    return (
        <div ref={ref} className="bx-stepper_label">
            {children}
        </div>
    );
}

export function Stepper({ options, value: currentValue, onChange }: Props) {
    const [sizes, setSizes] = useState({} as { [i: number]: number });
    return (
        <div className="bx-stepper">
            {options.map(({ value, label }, i) => (
                <div className="bx-stepper_step">
                    <div className="bx-stepper_group">
                        <button
                            onClick={() => onChange && onChange(value)}
                            className={`bx-stepper_button ${
                                value === currentValue
                                    ? "bx-stepper_button--active "
                                    : ""
                            } ${onChange ? "bx-stepper_button--click" : ""}`}
                        >
                            <strong>{value}</strong>
                        </button>
                        <StepLabel
                            onResize={(value) =>
                                setSizes((sizes) => ({
                                    ...sizes,
                                    [i]: value?.width,
                                }))
                            }
                        >
                            {label}
                        </StepLabel>
                    </div>
                    {i < options.length - 1 && (
                        <div
                            className="bx-stepper_line"
                            style={{
                                marginLeft: (((sizes[i] || 0) - 28) / 2) * -1,
                                marginRight:
                                    (((sizes[i + 1] || 0) - 28) / 2) * -1,
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
