import { TableProps } from "@bxreact/table";
import "./index.css";
export interface TableWrapperProps<Data extends any[]> extends TableProps<Data> {
    paginations?: number[];
    labelPaginations?: string;
}
export declare const options: {
    paginations: number[];
    labelPaginations: string;
    moves: {
        ">": number;
        ">>": number;
        "<": number;
        "<<": number;
    };
};
export declare function TableWrapper<Data extends {
    [prop: string]: any;
}[]>({ data, paginations, labelPaginations, ...propsTable }: TableWrapperProps<Data>): JSX.Element;
