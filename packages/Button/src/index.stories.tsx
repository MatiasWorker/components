import "@bxreact/theme";
import { Button } from "./";

export default {
    title: "Generic/Button",
    argTypes: {
        size: {
            options: ["xs", "sm", "md", "lg"],
            control: { type: "radio" },
        },

        status: {
            options: ["info", "success", "warning", "danger"],
            control: { type: "radio" },
        },
    },
    args: {
        thead: false,
        badge: false,
        wrap: false,
        outline: false,
        href: "",
        bgcolor: "",
        color: "",
        icon: false,
        disabled: false,
        open: false,
        loading: false,
    },
};

export const Default = (props) => (
    <Button {...props}>
        {!props.loading && <span>★</span>}
        {!props.icon && <span>Button</span>}
    </Button>
);

Default.args = {
    size: "",
    href: "",
    open: false,
    disabled: false,
    thead: false,
    outline: false,
    badge: false,
    wrap: false,
    icon: false,
    status: "",
    color: "",
    bgcolor: "",
};
