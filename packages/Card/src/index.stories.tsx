import "@bxreact/theme";
import { Card } from "./";

export default {
    title: "Generic/Card",
    argTypes: {
        radius: {
            options: ["xs", "sm", "md", "lg"],
            control: { type: "radio" },
        },
        deep: {
            options: [0, 1, 2],
            control: { type: "radio" },
        },
        bgColor: {
            control: "text",
        },
        padding: {
            control: "text",
        },
        color: {
            control: "text",
        },
        brColor: {
            control: "text",
        },
        theme: {
            options: ["", "success", "info", "warning", "danger"],
            control: { type: "radio" },
        },
    },
};

export const Default = (props) => (
    <Card {...props}>
        culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
        Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem culpa
        veniam anim culpa non exercitation cupidatat ex nostrud aute elit veniam
        officia proident laboris exercitation labore fugiat tempor cupidatat in
        commodo et aute et aliqua consectetur
    </Card>
);
