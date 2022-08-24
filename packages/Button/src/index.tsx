import { MouseEventHandler } from "react";
import "./index.css";

interface Props {
    href: string;
    open: boolean;
    disabled?: boolean;
    onClick?: (event: MouseEventHandler<HTMLButtonElement>) => void;
    children: any;
}

export function FieldSwitch({
    onClick,
    disabled,
    href,
    open,
    children,
}: Props): JSX.Element {
    const Type = href ? "a" : "button";
    return (
        <Type
            onClick={onClick as any}
            href={href}
            target={open ? "_blank" : null}
            disabled={disabled}
        >
            {children}
        </Type>
    );
}
