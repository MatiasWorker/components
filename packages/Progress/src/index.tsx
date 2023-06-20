import "@bxreact/theme";
import { CSSProperties } from "react";
import type { Status } from "@bxreact/theme";
import "./index.css";

export function Label({ value }: { value: number }) {
    const percent = Math.min(Math.max(value, 0), 1);
    return (
        <div
            className="bx-progress"
            style={{ "--percent": percent } as CSSProperties}
        >
            <div className="bx-progress_value"></div>
        </div>
    );
}
