import { HTMLAttributes } from "react";
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
export declare function Card({ children, className, deep, radius, bgcolor, color, brcolor, theme, ...props }: Props): JSX.Element;
export {};
