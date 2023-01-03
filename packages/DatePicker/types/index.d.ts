import "@bxreact/input";
import { CalendarProps } from "react-date-range";
import "./index.css";
interface InternalRange {
    startDate: Date;
    endDate: Date;
}
export interface Props {
    onChange(range: InternalRange): void;
    range: InternalRange;
}
export declare function DatePickerRange({ onChange, range, ...dateRangeProps }: Props & Omit<CalendarProps, "onChange">): JSX.Element;
export {};
