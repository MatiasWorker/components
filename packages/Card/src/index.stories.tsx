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

export const Default = (props) => (
    <Card {...props}>
        culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
        Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem culpa
        veniam anim culpa non exercitation cupidatat ex nostrud aute elit veniam
        officia proident laboris exercitation labore fugiat tempor cupidatat in
        commodo et aute et aliqua consectetur
    </Card>
);

Default.args = {
    size: "",
};
