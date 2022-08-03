import "./index.css";
interface Props {
    value: string;
    type?: string;
    className?: string;
    onChange?: (value: string) => void;
    status?: "success" | "warning" | "danger" | "";
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}
export declare function FieldText({ value, type, className, onChange, minLength, maxLength, min, max, status, }: Props): JSX.Element;
export {};
