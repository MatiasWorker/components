import { ReactNode, InputHTMLAttributes, Ref } from "react";
import "./index.css";
export * from "./textarea/textarea";
export * from "./checkbox/checkbox";
export * from "./radio/radio";
export * from "./select/select";
declare type Props = {
    error?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: "sm" | "md";
    reference?: Ref<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;
export declare function Input({ disabled, error, fullWidth, leftIcon, rightIcon, size, reference, ...props }: Props): JSX.Element;
