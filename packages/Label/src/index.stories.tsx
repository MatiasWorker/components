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

export const LabelWithDetailSmall = (props) => (
    <Label
        {...props}
        title={"Header"}
        detail={<small>Detail 10px</small>}
    ></Label>
);

export const LabelWithIcon = (props) => (
    <Label {...props} title="Header" icon="😀" detail="detail..."></Label>
);

export const LabelWithCheckbox = (props) => (
    <Label
        {...props}
        title="Header"
        icon={<input type="checkbox" />}
        detail="detail..."
    ></Label>
);
