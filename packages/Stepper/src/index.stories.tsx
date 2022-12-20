import "@bxreact/theme";
import { Stepper } from "./";

export default {
    title: "Generic/Stepper",
};

export const Default = (props) => (
    <Stepper
        options={[
            {
                label: "Option 1",
                value: 1,
            },
            {
                label: "Option 2",
                value: 2,
            },
            {
                label: "Option 3",
                value: 3,
            },
        ]}
        value={3}
        onChange={(value) => console.log({ value })}
    ></Stepper>
);

export const DefaultMax = (props) => (
    <Stepper
        options={[
            {
                label: "Option 1",
                value: 1,
            },
            {
                label: "Option 2",
                value: 2,
            },
            {
                label: "Option 3",
                value: 3,
            },
            {
                label: "Option 4",
                value: 4,
            },
            {
                label: "Option 5",
                value: 5,
            },
            {
                label: "Option 6",
                value: 6,
            },
        ]}
        value={3}
        onChange={(value) => console.log({ value })}
    ></Stepper>
);
