import "@bxreact/theme";
import { Button } from "./";

export default {
    title: "Table/Button",
    argTypes: {
        size: {
            options: ["xs", "sm", "md", "lg"],
            control: { type: "radio" },
        },
        thead: { control: "boolean" },
        badge: { control: "boolean" },
        href: { control: "text" },
        color: { control: "text" },
        icon: { control: "boolean" },
        disabled: { control: "boolean" },
        open: { control: "boolean" },
        status: {
            options: ["info", "success", "warning", "danger"],
            control: { type: "radio" },
        },
    },
};

export const Default = (props) => (
    <Button {...props}>
        <span>★</span>
        {!props.icon && <span>Button</span>}
    </Button>
);

Default.args = {
    size: "",
    href: "",
    open: false,
    disabled: false,
    thead: false,
    badge: false,
    icon: false,
    status: "",
    color: "",
};
