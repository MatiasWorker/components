import "@bxreact/theme";
import { Input, Textarea } from "./";

export default {
    title: "Generic/Input",
    argTypes: {
        size: {
            options: ["xs", "sm", "md", "lg"],
            control: { type: "radio" },
        },
        disabled: { control: "boolean" },
        fullWidth: { control: "boolean" },
        name: { control: "text" },
        placeholder: { control: "text" },
        error: { control: "boolean" },
        type: {
            options: ["text", "email", "password", "search", "number", "date"],
            control: { type: "radio" },
        },
        inputSize: {
            options: ["sm", "md"],
            control: { type: "radio" },
        },
    },
};

export const Default = (props) => <Input {...props}></Input>;

Default.args = {
    size: "sm",
    disabled: false,
    fullWidth: false,
    name: "",
    error: false,
    type: "text",
    inputSize: "sm",
    placeholder: "Placeholder",
};

export const ExampleSelect = (props) => (
    <Input
        type="select"
        placeholder="Select option"
        options={[
            { value: "1", label: "One" },
            { value: "2", label: "Two" },
            { value: "3", label: "Three" },
        ]}
    ></Input>
);

export const ExampleTextarea = () => <Textarea></Textarea>;
