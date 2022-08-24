import { MouseEventHandler } from "react";
import "./index.css";

interface Props {
    size?: "xs" | "sm" | "md" | "lg";
    href?: string;
    open?: boolean;
    disabled?: boolean;
    thead?: boolean;
    status?: "info" | "success" | "warning" | "danger";
    onClick?: (event: MouseEventHandler<HTMLButtonElement>) => void;
    children: any;
}

export function Button({
    onClick,
    disabled,
    href,
    open,
    children,
    size,
    thead,
    status,
}: Props): JSX.Element {
    const Type = href ? "a" : "button";
    const className: string[] = ["button"];

    if (size) className.push(`button--${size}`);

    if (thead) className.push(`button--thead`);

    if (status) className.push(`button--status-${status}`);

    return (
        <Type
            className={className.join(" ")}
            onClick={onClick as any}
            href={href}
            target={open ? "_blank" : null}
            disabled={disabled}
        >
            {children}
        </Type>
    );
}
