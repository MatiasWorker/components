import { FieldText } from "./";

export default {
    title: "Table/FieldText",
    argTypes: {
        status: {
            options: ["info", "success", "warning", "danger"],
            control: { type: "radio" },
        },
    },
};

export const ExampleFieldText = (props) => (
    <FieldText value="example" onChange={console.log} {...props} />
);

ExampleFieldText.args = {
    status: "",
};
