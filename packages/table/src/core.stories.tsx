import { Table } from "./core";
import { FieldSwitch } from "@bx/field-switch";
import { FieldText } from "@bx/field-text";

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
        seguro: (data: any) => <FieldSwitch></FieldSwitch>,
        default: (data: any, value) => <FieldText value={value}></FieldText>,
    },
}) => <Table data={data} header={header} types={types}></Table>;
