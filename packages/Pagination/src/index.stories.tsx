import { Pagination } from "./";

export default {
    title: "Table/Pagination",
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const ExampleFieldSwitch = () => (
    <Pagination
        disablePrev
        pagesPerPage={[10, 20, 30]}
        pagedLabel="Filas por página"
        moveLabel="1-10 de 16"
        onChangePagesPerPage={console.log}
        onChangeMove={console.log}
    />
);
