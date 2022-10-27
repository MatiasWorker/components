import { CSSProperties, ReactNode } from "react";
import "./index.css";
interface PropsTableCell {
    className?: string;
    children: any;
    color?: string;
    background?: string;
    align?: "center" | "start" | "end";
    tooltip?: any;
    label?: ReactNode;
    tooltipIcon?: ReactNode;
}
export declare function TableCell({ children, color, background, align, className, tooltip, tooltipIcon, }: PropsTableCell): JSX.Element;
declare type Fill<Value> = Value | {
    [index: string]: any;
};
export interface TableProps<Data extends any[]> {
    data: Data;
    collapse?: boolean;
    header: Fill<{
        [I in keyof Data[0]]?: any;
    }>;
    types?: Fill<{
        [I in keyof Data[0]]?: (data: Data[0], value: Data[0][I], property: I) => any;
    }>;
    rowStyle?: (data: Data[0]) => (CSSProperties & {
        "--table-row-min-height"?: string;
        "--table-row-border-bottom"?: string;
        "--table-row-background"?: string;
    }) | null;
}
export declare function Table<Data extends any[]>({ data, header, types, rowStyle, collapse, }: TableProps<Data>): JSX.Element;
export {};
