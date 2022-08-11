import { useState } from "react";
import { usePages } from "@bxreact/use-pages";
import { FieldSwitch } from "@bxreact/field-switch";
import { FieldText } from "@bxreact/field-text";
import { Table, TableCell } from "@bxreact/table";
import { Pagination } from "@bxreact/pagination";
import { data, Item } from "./data";

const MOVE = {
    ">": 1,
    ">>": 2,
    "<": -1,
    "<<": -2,
};

export function Example() {
    const [pagesPerPage, setPagesPerPage] = useState(10);
    const [updates, setUpdates] = useState<{
        [index: number]: Item;
    }>({});

    const pages = usePages(data, {
        page: 0,
        pages: pagesPerPage,
    });

    return (
        <div>
            <Table
                rowStyle={(data) =>
                    data.id === 1
                        ? {
                              "--table-row-background": "#FFE9E9",
                          }
                        : null
                }
                data={pages.group}
                header={{
                    id: "",
                    status: (
                        <TableCell background="tomato" color="white">
                            Status
                        </TableCell>
                    ),
                    fullName: "Nombre",
                    avatar: "Imagen",
                    email: "Email",
                    emailVerified: "Seguro",
                    phone: "Telefono",
                    bio: "Bio",
                }}
                types={{
                    id: (data: Item, value: string) => <strong>{value}</strong>,
                    status: () => <TableCell>Status</TableCell>,
                    avatar: (data: any, value) => (
                        <img
                            src={value}
                            loading="lazy"
                            style={{ width: 30, height: 30, borderRadius: 100 }}
                        />
                    ),
                    emailVerified: (data: Item, value) => (
                        <FieldSwitch
                            checked={
                                "emailVerified" in (updates[data.id] || {})
                                    ? updates[data.id].emailVerified
                                    : value
                            }
                            onChange={(emailVerified) => {
                                setUpdates({
                                    ...updates,
                                    [data.id]: {
                                        ...updates[data.id],
                                        emailVerified,
                                    },
                                });
                            }}
                        ></FieldSwitch>
                    ),
                    default: (data: Item, value: string, property: string) => (
                        <FieldText
                            value={updates?.[data.id]?.[property] || value}
                            status={data.id === 1 ? "danger" : ""}
                            onChange={(value) => {
                                setUpdates({
                                    ...updates,
                                    [data.id]: {
                                        ...updates[data.id],
                                        [property]: value,
                                    },
                                });
                            }}
                        ></FieldText>
                    ),
                }}
            ></Table>
            <Pagination
                isMoveDisabled={(type) => pages.isDisabled(MOVE[type])}
                pagesPerPage={[10, 20, 30]}
                pagedLabel="Filas por página"
                moveLabel={`${pages.position.start} - ${pages.position.end} de ${pages.position.length}`}
                onChangePagesPerPage={(value) => setPagesPerPage(Number(value))}
                onChangeMove={(type) => pages.to(MOVE[type])}
            />
        </div>
    );
}
