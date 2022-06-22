import { Table } from "./core";
import { Switch } from "@bx/switch";

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
        seguro: (data: any) => <Switch></Switch>,
    },
}) => <Table data={data} header={header} types={types}></Table>;
