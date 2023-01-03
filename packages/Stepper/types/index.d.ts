import "@bxreact/theme";
import "./index.css";
export interface Props {
    options: {
        label: string;
        value?: number | string;
    }[];
    value: number | string;
    onChange?: (step: number | string) => void;
}
export declare function Stepper({ options, value: currentValue, onChange }: Props): JSX.Element;
