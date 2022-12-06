import { useState, useEffect } from "react";
import { Table } from "@bxreact/table";
import { Pagination } from "@bxreact/pagination";

export default {
    title: "Table/Example with request",
    args: {
        collapse: false,
    },
};

interface RootObject {
    avatar: string;
    bio: string;
    email: string;
    emailVerified: boolean | string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
    newKey: number;
    phone: string;
    selected: boolean;
    twitterHandle: string;
    username: string;
}

export function Example(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [data, setData] = useState<{ items: RootObject[]; size: number }>({
        items: [],
        size: 0,
    });

    useEffect(() => {
        fetch(
            `https://example-data.draftbit.com/users?_limit=10&_page=${currentPage}`
        )
            .then((res) => res.json())
            .then((items) => setData({ items, size: 500 }));
    }, [currentPage]);

    return (
        <>
            <Table
                {...props}
                rowStyle={(data) =>
                    data.id === 1
                        ? {
                              "--table-row-background": "#FFE9E9",
                          }
                        : null
                }
                data={data.items}
                header={{
                    id: "",
                    fullName: "Nombre",
                    avatar: "Imagen",
                    newKey: "newKey",
                    email: "Email",
                    emailVerified: "Seguro",
                    phone: "Telefono",
                    bio: "Bio",
                }}
            ></Table>
            <Pagination
                value={limit}
                pagesPerPage={[10, 20, 30]}
                pagedLabel="Filas por página"
                moveLabel={`${currentPage + 1} de ${data.size}`}
                onChangePagesPerPage={(value) => {
                    setLimit(Number(value));
                }}
                onChangeMove={(type) => {
                    switch (type) {
                        case "<":
                            if (currentPage - 1 > 0) {
                                setCurrentPage(currentPage - 1);
                            }
                            break;
                        case ">":
                            if (currentPage + 1 < data.size) {
                                setCurrentPage(currentPage + 1);
                            }
                            break;
                        case "<<":
                        case ">>":
                            return false;
                    }
                }}
                isMoveDisabled={(type) =>
                    type == ">>" || type == "<<" ? true : false
                }
            />
        </>
    );
}
