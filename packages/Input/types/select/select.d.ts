import { SelectHTMLAttributes, ReactNode } from "react";
declare type Props = {
    error?: boolean;
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: "sm" | "md";
    fill?: string;
    loading?: boolean;
    options?: {
        value: string;
        label: string;
        disabled?: boolean;
    }[];
} & SelectHTMLAttributes<HTMLSelectElement>;
export declare function Select({ placeholder, error, fullWidth, leftIcon, rightIcon, size, options, disabled, loading, ...props }: Props): JSX.Element;
export {};
