import { Table } from "./";

export default {
    title: "Table/Core",
    component: Table,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const ExampleTable = ({
    data = [
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
    header = {
        id: "",
        nombre: "Nombre",
        apellido: "Apellido",
        comuna: "Zona",
        seguro: "Seguro",
    },
    types = {
        id: (data: any, value: string) => <strong>{value}</strong>,
        seguro: (data: any, value) => <input type="checkbox" checked={value} />,
        default: (data: any, value) => <span>{value}</span>,
    },
}) => <Table data={data} header={header} types={types}></Table>;
