import "@bxreact/theme";
import { ReactNode } from "react";
import "./index.css";

export function Header({
    title,
    children,
    required,
    small,
    rightIcon,
    leftIcon,
}: {
    title: ReactNode;
    required?: boolean;
    children?: ReactNode;
    small?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}) {
    const Size = small ? "h3" : "h2";
    return (
        <header className="bx-header">
            <div className="bx-header_title">
                {leftIcon && (
                    <div className="bx-header_title_left-icon">{leftIcon}</div>
                )}
                <Size>
                    {title}
                    {required && <span className="bx-header_required">*</span>}
                </Size>
                {rightIcon && (
                    <div className="bx-header_title_right-icon">
                        {rightIcon}
                    </div>
                )}
            </div>
            {children && <div className="bx-header_content">{children}</div>}
        </header>
    );
}
