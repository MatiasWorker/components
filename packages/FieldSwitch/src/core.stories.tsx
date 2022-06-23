import { FieldSwitch } from "./core";

export default {
    title: "Table/FieldSwitch",
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const ExampleFieldSwitch = () => (
    <FieldSwitch checked onChange={console.log} />
);
