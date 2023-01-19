import "@bxreact/theme";
import type { Status } from "@bxreact/theme";
import { ReactNode } from "react";
import "./index.css";

export function Label({
    title,
    reverse,
    children,
    detail,
    required,
    layout,
    icon,
    status,
}: {
    title?: ReactNode;
    children?: ReactNode;
    detail?: ReactNode;
    reverse?: boolean;
    required?: boolean;
    icon?: ReactNode;
    status?: Status;
    layout?: "vertical" | "horizontal" | "center";
}) {
    const classNameCenter = layout === "center" ? "bx-label--center" : "";
    return (
        <label className={`bx-label bx-label--status-${status}`}>
            <div className="bx-label_row bx-label_row--horizontal">
                {!!icon && <div className="bx-label_icon">{icon}</div>}
                <div
                    className={`bx-label_row ${
                        reverse ? "bx-label_row--reverse" : ""
                    } ${layout ? `bx-label_row--${layout}` : ""} `}
                >
                    {!!title && (
                        <div className={`bx-label_title ${classNameCenter}`}>
                            {title}
                            {required && (
                                <span className="bx-label_required">*</span>
                            )}
                        </div>
                    )}

                    {!!children && (
                        <div className={`bx-label_content ${classNameCenter}`}>
                            {children}
                        </div>
                    )}

                    {!!detail && (
                        <div className={`bx-label_detail ${classNameCenter}`}>
                            {detail}
                        </div>
                    )}
                </div>
            </div>
        </label>
    );
}
