import { Example } from "./example";

export default {
    title: "Table/Example",
    component: Example,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const ExampleTable = <Example></Example>;
