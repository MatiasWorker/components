import * as Atoms from "./atoms";
import "core.css";

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
        <Atoms.Table>
            <Atoms.THead>
                <Atoms.Tr>
                    {Object.entries(header).map(([prop, value]) => (
                        <Atoms.Td transparent>{value}</Atoms.Td>
                    ))}
                </Atoms.Tr>
            </Atoms.THead>
            <Atoms.TBody>
                {data.map((row) => (
                    <Atoms.Tr>
                        {Object.entries(row)
                            .filter(([prop]) => prop in header)
                            .map(([prop, value], key) => (
                                <Atoms.Td transparent={prop === "id"}>
                                    {prop in types
                                        ? types[prop](row, value)
                                        : types.default
                                        ? types.default(row, value)
                                        : value}
                                </Atoms.Td>
                            ))}
                    </Atoms.Tr>
                ))}
            </Atoms.TBody>
        </Atoms.Table>
    );
}
