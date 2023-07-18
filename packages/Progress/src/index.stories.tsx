import { Progress } from "./";

export default {
    title: "Generic/Progress",
    args: {
        value: 0.5,
        size: "",
    },
};

export const Default = (props) => (
    <Progress {...props}>
        <input type="text" />
    </Progress>
);
