import { InputHTMLAttributes } from "react";
import "./file.css";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type?: "file";
    label?: string;
}
export declare function File({ label, ...props }: Props): JSX.Element;
export {};
