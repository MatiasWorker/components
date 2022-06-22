import { Table } from "./core";

export default {
    title: "Table/Core",
    component: Table,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => <Table {...args} />;

export const Example = Template.bind({});

Example.args = {
    primary: true,
    label: "Button",
};
