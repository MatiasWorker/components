import "@bxreact/theme";
import { ReactNode } from "react";
import "./index.css";

export function Header({
    title,
    children,
    required,
}: {
    title: ReactNode;
    required?: boolean;
    children?: ReactNode;
}) {
    return (
        <header className="bx-header">
            <div className="bx-header_title">
                <h2>
                    {title}
                    {required && <span className="bx-header_required">*</span>}
                </h2>
            </div>
            {children && <div className="bx-header_content">{children}</div>}
        </header>
    );
}
