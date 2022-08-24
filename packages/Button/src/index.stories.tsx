import "@bxreact/theme";
import { Button } from "./";

export default {
    title: "Table/Button",
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Default = () => <Button>Button</Button>;

export const DefaultWithIcon = () => (
    <Button>
        <span>★</span>
        <span>Button</span>
    </Button>
);

export const DefaultXs = () => <Button size="xs">Button</Button>;

export const DefaultMd = () => <Button size="md">Button</Button>;

export const DefaultLg = () => <Button size="lg">Button</Button>;

export const DefaulttDisabled = () => <Button disabled>Button</Button>;

export const Thead = () => <Button thead>Button</Button>;

export const TheadInfo = () => (
    <Button thead status="info">
        Button
    </Button>
);

export const TheadSuccess = () => (
    <Button thead status="success">
        Button
    </Button>
);

export const TheadWarning = () => (
    <Button thead status="warning">
        Button
    </Button>
);

export const TheadDanger = () => (
    <Button thead status="danger">
        Button
    </Button>
);

export const TheadDisabled = () => (
    <Button thead disabled>
        Button
    </Button>
);
