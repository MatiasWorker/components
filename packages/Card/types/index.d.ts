import { HTMLAttributes } from "react";
import "./index.css";
interface Props extends HTMLAttributes<HTMLDivElement> {
    size?: "md" | "lg";
    className?: string;
    id?: string;
    children: any;
}
export declare function Card({ size, children, className, ...props }: Props): JSX.Element;
export {};
