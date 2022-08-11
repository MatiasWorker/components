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
    disabled?: boolean;
}
export declare function FieldText({ value, type, className, onChange, minLength, maxLength, min, max, status, disabled, }: Props): JSX.Element;
export {};
