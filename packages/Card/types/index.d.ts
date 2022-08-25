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
    children: any;
}
export declare function Button({ onClick, disabled, href, open, children, size, thead, status, icon, }: Props): JSX.Element;
export {};
