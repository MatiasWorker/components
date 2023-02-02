import type { Spaces, Radius } from "@bxreact/theme";
import { HTMLAttributes } from "react";
import "./index.css";
export interface Props extends HTMLAttributes<HTMLDivElement> {
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
export declare function Card({ children, className, deep, radius, bgColor, color, brColor, theme, padding, ...props }: Props): JSX.Element;
