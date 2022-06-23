import { FieldSwitch } from "./";

export default {
    title: "Table/FieldSwitch",
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const ExampleFieldSwitch = () => (
    <FieldSwitch checked onChange={console.log} />
);
