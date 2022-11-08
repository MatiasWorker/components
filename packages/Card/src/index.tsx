import { HTMLAttributes } from "react";
import "./index.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
    size?: "md" | "lg";
    className?: string;
    id?: string;
    children: any;
}

export function Card({
    size,
    children,
    className,
    ...props
}: Props): JSX.Element {
    const listClassName: string[] = ["bx-card"];

    if (size) listClassName.push(`bx-card--size-${size}`);

    if (className) listClassName.push(className);

    return (
        <div {...props} className={listClassName.join(" ")}>
            {children}
        </div>
    );
}
