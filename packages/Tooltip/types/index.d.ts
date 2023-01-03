import "./index.css";
interface Props {
    content: any;
    children: any;
    onChange?: (show: boolean) => void;
}
export declare function Tooltip({ content, children, onChange }: Props): JSX.Element;
export {};
