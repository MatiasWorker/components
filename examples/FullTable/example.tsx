import { useState, useEffect } from "react";
import { usePages } from "@bx/use-pages";
import { FieldSwitch } from "@bx/field-switch";
import { FieldText } from "@bx/field-text";
import { Table } from "@bx/table";
import { Pagination } from "@bx/pagination";

const PAGES_PER_PAGES = [10, 20, 30, 40];

const MOVE = {
    ">": 1,
    ">>": 2,
    "<": -1,
    "<<": -2,
};

export function Example({
    header = {
        id: "",
        fullName: "Nombre",
        avatar: "Imagen",
        email: "Email",
        emailVerified: "Seguro",
    },
    types = {
        id: (data: any, value: string) => <strong>{value}</strong>,
        avatar: (data: any, value) => (
            <img
                src={value}
                loading="lazy"
                style={{ width: 30, height: 30, borderRadius: 100 }}
            />
        ),
        email: (data: any, value) => <FieldText value={value}></FieldText>,
        emailVerified: (data: any, value) => (
            <FieldSwitch checked={value === "truew"}></FieldSwitch>
        ),
    },
}) {
    const [data, setData] = useState([]);
    const [pagesPerPage, setPagesPerPage] = useState(10);

    useEffect(() => {
        fetch("https://example-data.draftbit.com/users?_limit=40")
            .then((res) => res.json())
            .then(setData);
    }, []);

    const pages = usePages(data, {
        page: 0,
        pages: pagesPerPage,
    });

    return (
        <div>
            <Table data={pages.group} header={header} types={types}></Table>
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
