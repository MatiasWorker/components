import { MouseEventHandler } from "react";
import "./index.css";

interface Props {
    size?: "xs" | "sm" | "md" | "lg";
    href?: string;
    open?: boolean;
    disabled?: boolean;
    thead?: boolean;
    icon?: boolean;
    status?: "info" | "success" | "warning" | "danger";
    onClick?: (event: MouseEventHandler<HTMLButtonElement>) => void;
    badge?: boolean;
    color?: string;
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
    icon,
    badge,
    color,
}: Props): JSX.Element {
    const Type = href ? "a" : "button";
    const className: string[] = ["button"];

    if (size) className.push(`button--${size}`);

    if (thead) className.push(`button--thead`);

    if (status) className.push(`button--status-${status}`);

    if (icon) className.push(`button--icon`);

    if (badge) className.push(`button--badge`);

    if ((onClick || href) && !disabled) className.push(`button--pointer`);

    return (
        <Type
            className={className.join(" ")}
            onClick={onClick as any}
            href={href}
            target={open ? "_blank" : null}
            disabled={disabled}
            style={
                color
                    ? ({
                          "--button-bgcolor": `var(--bx-color-${color}, var(--bx-button-filled-bgcolor))`,
                      } as any)
                    : null
            }
        >
            {children}
        </Type>
    );
}
