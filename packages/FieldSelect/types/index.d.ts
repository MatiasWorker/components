/// <reference types="react" />
import "./index.css";
interface Props {
    value: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    options: {
        value: string;
        label?: string;
    }[];
}
export declare function FieldSelect({ value, placeholder, options, onChange, }: Props): JSX.Element;
export {};
