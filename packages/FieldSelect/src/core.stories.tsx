import { FieldSelect } from "./core";

export default {
    title: "Table/FieldSelect",
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const ExampleFieldSelect = () => (
    <FieldSelect
        value="example"
        onChange={console.log}
        placeholder="Select..."
        options={[{ label: "Option 1", value: "1" }]}
    />
);
