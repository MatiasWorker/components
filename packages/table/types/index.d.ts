/// <reference types="react" />
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
export declare function Table({ data, header, types, }: {
    data: Data;
    header: Header;
    types: Types;
}): JSX.Element;
