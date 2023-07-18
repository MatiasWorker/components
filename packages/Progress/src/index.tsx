import "@bxreact/theme";
import { CSSProperties } from "react";
import type { Spaces } from "@bxreact/theme";
import "./index.css";

export function Progress({
    value,
    speed = ".3s",
    size,
}: {
    value: number;
    speed?: string;
    size?: Spaces;
}) {
    const percent = Math.min(Math.max(value, 0), 1);

    return (
        <div
            className={`bx-progress bx-progress--${size}`}
            style={{ "--percent": percent, "--speed": speed } as CSSProperties}
        >
            <div className="bx-progress_value"></div>
        </div>
    );
}
