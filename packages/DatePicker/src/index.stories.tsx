import "@bxreact/theme";
import { DatePickerRange } from ".";

export default {
    title: "Generic/DatePicker",
    argTypes: {},
};

export const Default = () => (
    <DatePickerRange
        onChange={console.log}
        range={{ startDate: new Date(), endDate: new Date() }}
    ></DatePickerRange>
);
