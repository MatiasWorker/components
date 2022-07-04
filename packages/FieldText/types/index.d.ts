/// <reference types="react" />
import "./index.css";
interface Props {
    value: string;
    onChange?: (value: string) => void;
    status?: "success" | "warning" | "danger" | "";
}
export declare function FieldText({ value, onChange, status }: Props): JSX.Element;
export {};
