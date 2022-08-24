import { CSSProperties, useState } from "react";
import { useFloating, flip, shift } from "@floating-ui/react-dom";

import "./index.css";

export function TableCell({
    children,
    color,
    background,
    align,
    className,
    tooltip,
}: {
    className?: string;
    children: any;
    color?: string;
    background?: string;
    align?: "center" | "start" | "end";
    tooltip?: any;
}) {
    const style = {};
    const { x, y, reference, floating, strategy } = useFloating({
        placement: "bottom",
        middleware: [
            flip({
                fallbackPlacements: ["top", "bottom"],
            }),
            shift(),
        ],
    });

    if (align) style["--table-cell-align"] = align;
    if (color) style["--table-cell-color"] = color;
    if (background) style["--table-cell-background"] = background;

    return (
        <div
            ref={reference}
            className={`table_cell ${className || ""}`}
            style={style}
        >
            <div className="table_cell_content">{children}</div>
            {tooltip && (
                <div
                    className={`table_cell_tooltip`}
                    ref={floating}
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                    }}
                >
                    {tooltip}
                </div>
            )}
        </div>
    );
}

type Fill<Value> = Value | { [index: string]: any };

export interface TableProps<Data extends any[]> {
    data: Data;
    header: Fill<
        {
            [I in keyof Data[0]]?: any;
        }
    >;
    types?: Fill<
        {
            [I in keyof Data[0]]?: (
                data: Data[0],
                value: Data[0][I],
                property: I
            ) => any;
        }
    >;
    rowStyle?: (data: Data[0]) =>
        | (CSSProperties & {
              "--table-row-min-height"?: string;
              "--table-row-border-bottom"?: string;
              "--table-row-background"?: string;
          })
        | null;
}

export function Table<Data extends any[]>({
    data,
    header,
    types,
    rowStyle,
}: TableProps<Data>): JSX.Element {
    const headerEntries = Object.entries(header);
    const getCell = (row, prop: string, value: any) => {
        const cell =
            prop in types
                ? types[prop](row, value, prop)
                : types.default
                ? types.default(row, value, prop)
                : value;
        return typeof cell === "object" ? cell : <TableCell>{cell}</TableCell>;
    };

    return (
        <table className="table">
            <thead className="table_thead">
                <tr className="table_tr">
                    {headerEntries.map(([prop, value], key) => (
                        <td
                            className={`table_td table_td--transparent`}
                            key={key + ""}
                        >
                            {typeof value === "object" ? (
                                value
                            ) : (
                                <TableCell>{value}</TableCell>
                            )}
                        </td>
                    ))}
                </tr>
            </thead>
            <tbody className="table_tbody">
                {data.map((row: any, key: number) => (
                    <tr
                        key={key + ""}
                        className="table_tr"
                        style={rowStyle ? rowStyle(row) : null}
                    >
                        {headerEntries
                            .map(([prop]) => [prop, row[prop]])
                            .map(([prop, value], key) => (
                                <td
                                    key={key + ""}
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
