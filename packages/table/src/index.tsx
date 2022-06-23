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

export function Table({
    data,
    header,
    types,
}: {
    data: Data;
    header: Header;
    types: Types;
}) {
    return (
        <table className="table">
            <thead className="table_thead">
                <tr className="table_tr">
                    {Object.entries(header).map(([prop, value]) => (
                        <td className="table_td table_td--transparent">
                            {value}
                        </td>
                    ))}
                </tr>
            </thead>
            <tbody className="table_tbody">
                {data.map((row) => (
                    <tr className="table_tr">
                        {Object.entries(row)
                            .filter(([prop]) => prop in header)
                            .map(([prop, value], key) => (
                                <td
                                    className={`table_td ${
                                        prop === "id"
                                            ? "table_td--transparent"
                                            : ""
                                    }`}
                                >
                                    {prop in types
                                        ? types[prop](row, value)
                                        : types.default
                                        ? types.default(row, value)
                                        : value}
                                </td>
                            ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
