import "@bxreact/theme";
import { Input, Textarea, Checkbox, Radio, Select, File } from "./";

export default {
    title: "Generic/Input",
    argTypes: {
        size: {
            options: ["sm", "md"],
            control: { type: "radio" },
        },
        disabled: { control: "boolean" },
        checked: { control: "boolean" },
        fullWidth: { control: "boolean" },
        name: { control: "text" },
        value: { control: "text" },
        placeholder: { control: "text" },
        error: { control: "boolean" },
        type: {
            options: ["text", "email", "password", "search", "number", "date"],
            control: { type: "radio" },
        },
        status: {
            options: ["", "success", "info", "warning", "danger"],
            control: { type: "radio" },
        },
    },
};

export const Default = (props) => <Input {...props}></Input>;

export const DefaultLoading = (props) => <Input {...props} loading></Input>;

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

export const ExampleWithLeftIcon = (props) => (
    <Input {...props} leftIcon={"😃"}></Input>
);

export const ExampleWithRightIcon = (props) => (
    <Input {...props} rightIcon={"😃"}></Input>
);

export const ExampleSelect = (props) => (
    <Select
        {...props}
        placeholder="Select option"
        value={props.value}
        options={[
            { value: "1", label: "One" },
            { value: "2", label: "Two" },
            { value: "3", label: "Three", disabled: true },
        ]}
    ></Select>
);

export const ExampleTextarea = (props) => <Textarea {...props}></Textarea>;

export const ExampleCheckbox = (props) => <Checkbox {...props}></Checkbox>;

ExampleCheckbox.args = {
    checked: false,
};

export const ExampleRadio = (props) => <Radio {...props}></Radio>;

ExampleRadio.args = {
    checked: false,
};

export const ExampleFile = () => <File multiple></File>;
