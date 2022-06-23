import { FieldText } from "./";

export default {
    title: "Table/FieldText",
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const ExampleFieldText = () => (
    <FieldText value="example" onChange={console.log} />
);
