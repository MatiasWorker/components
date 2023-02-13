import { SelectHTMLAttributes, ReactNode } from "react";
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
} & SelectHTMLAttributes<HTMLSelectElement>;
export declare function Select({ placeholder, error, fullWidth, leftIcon, rightIcon, size, options, disabled, ...props }: Props): JSX.Element;
export {};
