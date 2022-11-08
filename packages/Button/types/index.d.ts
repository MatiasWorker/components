import "@bxreact/theme";
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
    wrap?: boolean;
    onClick?: (event: MouseEventHandler<HTMLButtonElement>) => void;
    children: any;
}
export declare function Button({ onClick, disabled, href, open, children, size, thead, status, icon, wrap, badge, color, bgcolor, outline, }: Props): JSX.Element;
export {};
