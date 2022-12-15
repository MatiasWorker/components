import { InputHTMLAttributes, ReactNode } from "react";
import "./index.css";
export * from "./Checkbox";
export * from "./Radio";
export * from "./Textarea";
declare type Props = {
    error?: boolean;
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: "sm" | "md";
    fill?: string;
    options?: {
        value: string;
        label: string;
    }[];
} & InputHTMLAttributes<HTMLSelectElement>;
export declare function Select({ placeholder, error, fullWidth, leftIcon, rightIcon, size, fill, options, disabled, ...props }: Props): JSX.Element;
