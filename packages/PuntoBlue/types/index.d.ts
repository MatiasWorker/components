import { ReactNode } from "react";
import "./index.css";
import { PuntoBlueResponseItem } from "./types";
export * from "./item/item";
export declare function PuntoBlueList({ value, options, labelAlertUnselect, labelAlertEmpty, labelTitle, labelDescription, schedule, empty, onChange, }: {
    value?: string;
    options: PuntoBlueResponseItem[];
    labelTitle?: ReactNode;
    labelDescription?: ReactNode;
    labelAlertUnselect?: ReactNode;
    labelAlertEmpty?: ReactNode;
    schedule?: boolean;
    empty?: boolean;
    onChange?: (value: string) => any;
}): JSX.Element;
