import "@bxreact/theme";
import { MouseEvent } from "react";
import "./index.css";
import { Loading } from "@bxreact/icon";
interface Props {
    size?: "xs" | "sm" | "md" | "lg";
    href?: string;
    open?: boolean;
    target?: "_blank" | "_parent";
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
    thead?: boolean;
    icon?: boolean;
    status?: "info" | "success" | "warning" | "danger" | "";
    outline?: boolean;
    badge?: boolean;
    color?: string;
    bgcolor?: string;
    wrap?: boolean;
    loading?: boolean;
    preventDefault?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    children: any;
}

export function Button({
    onClick,
    preventDefault,
    disabled,
    href,
    open,
    children,
    size,
    thead,
    status,
    icon,
    wrap,
    badge,
    color,
    bgcolor,
    outline,
    loading,
    type,
    target,
}: Props): JSX.Element {
    const Type = href ? "a" : "button";
    const className: string[] = ["bx-button"];
    const style = {};

    disabled = disabled || loading;

    if (size) className.push(`bx-button--${size}`);

    if (thead) className.push(`bx-button--thead`);

    if (status) className.push(`bx-button--status-${status}`);

    if (icon) className.push(`bx-button--icon`);

    if (badge) className.push(`bx-button--badge`);

    if (outline) className.push(`bx-button--outline`);

    if (wrap) className.push(`bx-button--wrap`);

    if (!disabled) className.push(`bx-button--pointer`);

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
            type={type}
            className={className.join(" ")}
            onClick={
                onClick
                    ? (event: any) => {
                          if (preventDefault) event?.preventDefault();
                          onClick(event);
                      }
                    : null
            }
            href={href}
            target={open ? "_blank" : target}
            disabled={disabled}
            style={style}
        >
            {loading && <Loading size="1rem"></Loading>}
            {children}
        </Type>
    );
}
