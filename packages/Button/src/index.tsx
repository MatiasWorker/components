import { MouseEventHandler } from "react";
import "./index.css";

interface Props {
    size?: "xs" | "sm" | "md" | "lg";
    href?: string;
    open?: boolean;
    disabled?: boolean;
    thead?: boolean;
    icon?: boolean;
    status?: "info" | "success" | "warning" | "danger" | "";
    outline?: boolean;
    badge?: boolean;
    color?: string;
    bgcolor?: string;
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
    icon,
    badge,
    color,
    bgcolor,
    outline,
}: Props): JSX.Element {
    const Type = href ? "a" : "button";
    const className: string[] = ["button"];
    const style = {};

    if (size) className.push(`button--${size}`);

    if (thead) className.push(`button--thead`);

    if (status) className.push(`button--status-${status}`);

    if (icon) className.push(`button--icon`);

    if (badge) className.push(`button--badge`);

    if (outline) className.push(`button--outline`);

    if ((onClick || href) && !disabled) className.push(`button--pointer`);

    if (color) {
        style[
            "--button-color"
        ] = `var(--bx-color-${color}, var(--bx-button-filled-color))`;
    }

    if (bgcolor) {
        style[
            "--button-bgcolor"
        ] = `var(--bx-color-${bgcolor}, var(--bx-button-filled-bgcolor))`;
    }

    return (
        <Type
            className={className.join(" ")}
            onClick={onClick as any}
            href={href}
            target={open ? "_blank" : null}
            disabled={disabled}
            style={style}
        >
            {children}
        </Type>
    );
}
