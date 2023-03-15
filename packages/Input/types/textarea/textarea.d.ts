import { TextareaHTMLAttributes, Ref } from "react";
declare type Props = {
    id?: string;
    error?: boolean;
    disabled?: boolean;
    reference?: Ref<HTMLTextAreaElement>;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare function Textarea({ error, disabled, form, reference, ...props }: Props): JSX.Element;
export {};
