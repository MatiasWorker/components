import { Label } from "./";

export default {
    title: "Generic/Progress",
    args: {
        value: 0.5,
    },
};

export const Default = (props) => (
    <Label {...props}>
        <input type="text" />
    </Label>
);
