import type { Spaces, Radius } from "@bxreact/theme";
import { HTMLAttributes, CSSProperties } from "react";
import "./index.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    id?: string;
    children: any;
    deep?: 0 | 1 | 2;
    radius?: Radius;
    theme?: "" | "success" | "info" | "warning" | "danger";
    padding?: Spaces | `${Spaces} ${Spaces}`;
    color?: string;
    bgColor?: string;
    brColor?: string;
}

export function Card({
    children,
    className,
    deep = 1,
    radius = "md",
    bgColor = "white",
    color = "unset",
    brColor = "",
    theme = "",
    padding,
    ...props
}: Props): JSX.Element {
    const listClassName: string[] = ["bx-card"];

    if (deep) listClassName.push(`bx-card--deep-${deep}`);

    if (className) listClassName.push(className);

    if (theme) {
        brColor = `alert-${theme}-border`;
        bgColor = `alert-${theme}-bg`;
        color = `alert-${theme}-fg`;
    }

    if (brColor) listClassName.push(`bx-card--with-border`);

    const cssProps = {
        ...props.style,
        "--card-radius": `var(--bx-${radius}-radius)`,
        "--card-background": `var(--bx-color-${bgColor})`,
        "--card-color": `var(--bx-color-${color})`,
        "--card-brcolor": `var(--bx-color-${brColor})`,
    } as CSSProperties;

    if (padding) {
        cssProps["--card-padding"] = padding
            .split(/\s+/)
            .map((size) => `var(--bx-space-${size})`)
            .join(" ");
    }

    return (
        <div {...props} className={listClassName.join(" ")} style={cssProps}>
            {children}
        </div>
    );
}
