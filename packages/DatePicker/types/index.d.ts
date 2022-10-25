import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./index.css";
interface InternalRange {
    startDate: Date;
    endDate: Date;
}
export interface Props {
    onChange(range: InternalRange): void;
    range: InternalRange;
}
export declare function DatePickerRange({ onChange, range }: Props): JSX.Element;
export {};
