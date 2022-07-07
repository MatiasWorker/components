import { CSSProperties } from "react";

import "./index.css";

export type TypeCallback = (props: any, value: any) => any;

export interface Data {
    [index: string]: any;
}

export interface Header {
    [index: string]: any;
}

export interface Types {
    [index: string]: TypeCallback;
}

export function TableCell({ children }: { children: any }) {
    return <div className="table_cell">{children}</div>;
}

export interface TableProps {
    data: Data;
    header: Header;
    types: Types;
    rowStyle?: (data: any) =>
        | (CSSProperties & {
              "--table-row-min-height"?: string;
              "--table-row-border-bottom"?: string;
              "--table-row-background"?: string;
          })
        | null;
}

export function Table({
    data,
    header,
    types,
    rowStyle,
}: TableProps): JSX.Element {
    const headerEntries = Object.entries(header);
    const getCell = (row, prop: string, value: any) => {
        const cell =
            prop in types
                ? types[prop](row, value)
                : types.default
                ? types.default(row, value)
                : value;
        return typeof cell === "object" ? cell : <TableCell>{cell}</TableCell>;
    };

    return (
        <table className="table">
            <thead className="table_thead">
                <tr className="table_tr">
                    {headerEntries.map(([prop, value]) => (
                        <td
                            className={`table_td table_td--transparent ${
                                typeof value === "object" ? "" : "table_cell"
                            }`}
                        >
                            {value}
                        </td>
                    ))}
                </tr>
            </thead>
            <tbody className="table_tbody">
                {data.map((row) => (
                    <tr
                        className="table_tr"
                        style={rowStyle ? rowStyle(row) : null}
                    >
                        {headerEntries
                            .map(([prop]) => [prop, row[prop]])
                            .map(([prop, value], key) => (
                                <td
                                    className={`table_td ${
                                        prop === "id"
                                            ? "table_td--transparent"
                                            : ""
                                    }`}
                                >
                                    {getCell(row, prop, value)}
                                </td>
                            ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
