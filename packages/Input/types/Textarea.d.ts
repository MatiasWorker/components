import { TextareaHTMLAttributes } from "react";
declare type Props = {
    id?: string;
    error?: boolean;
    disabled?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare function Textarea({ value, onChange, id, error, disabled, placeholder, form, ...props }: Props): JSX.Element;
export {};
