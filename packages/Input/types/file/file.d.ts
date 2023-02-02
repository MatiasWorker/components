import { InputHTMLAttributes } from "react";
import "./file.css";
interface Props
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    type?: "file";
    label?: string;
    onChange?: (files: FileList) => void;
}

export declare function File({ label, onChange, ...props }: Props): JSX.Element;

export {};
