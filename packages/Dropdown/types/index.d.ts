import "./index.css";
interface Props {
    content: any;
    children: any;
    onChange?: (show: boolean) => void;
}
export declare function Dropdown({ content, children, onChange }: Props): JSX.Element;
export {};
