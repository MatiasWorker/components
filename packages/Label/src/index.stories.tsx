import { Label } from "./";

export default {
    title: "Generic/Label",
    argTypes: {
        layout: {
            control: "radio",
            options: ["vertical", "horizontal", "center"],
        },
    },
    args: {
        title: "Title",
        detail: "Description",
        required: false,
        reverse: false,
        layout: "vertical",
    },
};

export const Default = (props) => (
    <Label {...props}>
        <input type="text" />
    </Label>
);
