import { HTMLAttributes, CSSProperties } from "react";
import "./index.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    id?: string;
    children: any;
    deep?: 0 | 1 | 2;
    radius?: "xs" | "sm" | "md" | "lg";
    theme?: "" | "success" | "info" | "warning" | "danger";
    color?: string;
    bgcolor?: string;
    brcolor?: string;
}

export function Card({
    children,
    className,
    deep = 1,
    radius = "md",
    bgcolor = "white",
    color = "unset",
    brcolor = "",
    theme = "",
    ...props
}: Props): JSX.Element {
    const listClassName: string[] = ["bx-card"];

    if (deep) listClassName.push(`bx-card--deep-${deep}`);

    if (className) listClassName.push(className);

    if (theme) {
        brcolor = `alert-${theme}-border`;
        bgcolor = `alert-${theme}-bg`;
        color = `alert-${theme}-fg`;
    }

    if (brcolor) listClassName.push(`bx-card--with-border`);

    return (
        <div
            {...props}
            className={listClassName.join(" ")}
            style={
                {
                    "--card-radius": `var(--bx-${radius}-radius)`,
                    "--card-background": `var(--bx-color-${bgcolor})`,
                    "--card-color": `var(--bx-color-${color})`,
                    "--card-brcolor": `var(--bx-color-${brcolor})`,
                } as CSSProperties
            }
        >
            {children}
        </div>
    );
}
