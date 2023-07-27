import "@bxreact/theme";
import { DatePickerRange } from ".";

export default {
    title: "Generic/DatePicker",
    argTypes: {
        date: { control: "date" },
        startDate: { control: "date" },
        endDate: { control: "date" },
    },
};

export const Default = (props) => (
    <DatePickerRange
        onChange={console.log}
        range={{
            startDate: props.startDate || new Date(),
            endDate: props.endDate || new Date(),
        }}
    ></DatePickerRange>
);

export const DefaultOnlyDate = (props) => (
    <DatePickerRange
        onChange={console.log}
        date={props.date || new Date()}
    ></DatePickerRange>
);
