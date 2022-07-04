import { CSSProperties } from "react";
import "./index.css";
export declare type TypeCallback = (props: any, value: any) => any;
export interface Data {
    [index: string]: any;
}
export interface Header {
    [index: string]: any;
}
export interface Types {
    [index: string]: TypeCallback;
}
export declare function TableCell({ children }: {
    children: any;
}): JSX.Element;
export interface TableProps {
    data: Data;
    header: Header;
    types: Types;
    rowStyle?: (data: any) => (CSSProperties & {
        "--table-row-min-height"?: string;
        "--table-row-border-bottom"?: string;
        "--table-row-background"?: string;
    }) | null;
}
export declare function Table({ data, header, types, rowStyle }: TableProps): JSX.Element;