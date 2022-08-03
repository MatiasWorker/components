import "./index.css";
interface Props {
    value: string;
    type?: string;
    className?: string;
    onChange?: (value: string) => void;
    status?: "success" | "warning" | "danger" | "";
    minLength: number;
    maxLength: number;
}
export declare function FieldText({ value, type, className, onChange, minLength, maxLength, status, }: Props): JSX.Element;
export {};
