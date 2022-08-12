import "./index.css";
interface Props {
    value: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    options: {
        value: string;
        label?: string;
    }[];
    appearance?: "pagination" | "cell";
    status?: "success" | "warning" | "danger" | "";
}
export declare function FieldSelect({ value, placeholder, options, onChange, appearance, status, }: Props): JSX.Element;
export {};
