import "@bxreact/theme";
import { ReactNode } from "react";
import "./index.css";

export function Label({
    title,
    reverse,
    children,
    detail,
    required,
    layout,
}: {
    title: ReactNode;
    children?: ReactNode;
    detail?: ReactNode;
    reverse?: boolean;
    required?: boolean;
    layout?: "vertical" | "horizontal" | "center";
}) {
    const classNameCenter = layout === "center" ? "bx-label--center" : "";
    return (
        <label
            className={`bx-label ${reverse ? "bx-label--reverse" : ""} ${
                layout ? `bx-label--${layout}` : ""
            } `}
        >
            {!!title && (
                <div className={`bx-label_title ${classNameCenter}`}>
                    {title}
                    {required && <span className="bx-label_required">*</span>}
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
        </label>
    );
}
