import { Table, TableCell } from "./";

export default {
    title: "Table/Core",
    component: Table,
    argTypes: {
        collapse: {
            control: "boolean",
        },
    },
};

export function ExampleTable({
    data,
    header,
    types,
    collapse,
}: typeof ExampleTable.args) {
    return (
        <Table
            data={data}
            header={header}
            types={types}
            collapse={collapse}
            rowStyle={({ id }) =>
                id == 3 ? { "--table-row-background": "#FFE9E9" } : null
            }
        ></Table>
    );
}

ExampleTable.args = {
    collapse: false,
    types: {
        id: (data: any, value: string) => <strong>{value}</strong>,
        seguro: (data: any, value) => <input type="checkbox" checked={value} />,
        default: (data: any, value) => <TableCell>{value}</TableCell>,
    },
    header: {
        id: "",
        nombre: <TableCell tooltip={"Nombre completo"}>Nombre</TableCell>,
        apellido: "Apellido",
        comuna: "Zona",
        seguro: "Seguro",
    },
    data: [
        {
            id: 1,
            nombre: "Roberto",
            apellido: "Gutiérrez",
            comuna: "Rancagua",
            seguro: true,
        },
        {
            id: 2,
            nombre: "Roberto",
            apellido: "Gutiérrez",
            comuna: "Rancagua",
            seguro: true,
        },
        {
            id: 3,
            nombre: "Roberto",
            apellido: "Gutiérrez",
            comuna: "Rancagua",
            seguro: true,
        },
    ],
};
