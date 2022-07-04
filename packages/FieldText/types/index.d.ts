/// <reference types="react" />
import "./index.css";
interface Props {
    value: string;
    onChange?: (value: string) => void;
}
export declare function FieldText({ value, onChange }: Props): JSX.Element;
export {};
