import { ReactNode, InputHTMLAttributes } from "react";
import "./index.css";
export * from "./Textarea";
export * from "./Checkbox";
export * from "./Radio";
export * from "./Select";
declare type Props = {
    type?: "text" | "email" | "password" | "search" | "number" | "select" | "date" | string;
    error?: boolean;
    form?: string;
    name?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    inputSize?: "sm" | "md";
    fill?: string;
    ref?: any;
    options?: {
        value: string;
        label: string;
    }[];
} & InputHTMLAttributes<HTMLInputElement>;
export declare function Input({ type, value, onChange, id, readOnly, disabled, placeholder, required, form, name, error, fullWidth, leftIcon, rightIcon, inputSize, fill, options, ...props }: Props): JSX.Element;
