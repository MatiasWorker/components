/// <reference types="react" />
import "./index.css";
interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
export declare function FieldSwitch({ checked, onChange }: Props): JSX.Element;
export {};
