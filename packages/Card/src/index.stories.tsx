import "@bxreact/theme";
import { Card } from "./";

export default {
    title: "Generic/Card",
    argTypes: {
        size: {
            options: ["md", "lg"],
            control: { type: "radio" },
        },
    },
};

export const Default = (props) => <Card {...props}>welcome!</Card>;

Default.args = {
    size: "",
};
