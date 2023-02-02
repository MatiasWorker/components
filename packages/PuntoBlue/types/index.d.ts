import { ReactNode } from "react";
import "./index.css";
import { PuntoBlueResponseItem } from "./types";
export * from "./item/item";
export declare function PuntoBlueList({ value, options, labelAlertUnselect, labelTitle, labelDescription, }: {
    value?: string;
    options: PuntoBlueResponseItem[];
    labelTitle?: ReactNode;
    labelDescription?: ReactNode;
    labelAlertUnselect?: ReactNode;
}): JSX.Element;
