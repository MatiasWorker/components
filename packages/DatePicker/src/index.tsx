import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";
import { Dropdown } from "@bxreact/dropdown";
import * as Icon from "@bxreact/icon";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./index.css";

const now = new Date();

const format = new Intl.DateTimeFormat("es", {
    year: "numeric",
    month: "short",
    day: "numeric",
}).format;

interface InternalRange {
    startDate: Date;
    endDate: Date;
}

export interface Props {
    onChange(range: InternalRange): void;
    range: InternalRange;
}

export function DatePickerRange({ onChange, range }: Props) {
    return (
        <div className="form-date-picker">
            <Dropdown
                content={
                    <DateRange
                        locale={es}
                        ranges={[{ ...range, key: "range" }]}
                        maxDate={now}
                        onChange={({ range }) =>
                            onChange(range as InternalRange)
                        }
                        showDateDisplay={false}
                    />
                }
            >
                <button className="form-input form-input-button">
                    <Icon.Calendar size="1em" />
                    <strong className="form-input-button_label">
                        {[range].map(({ startDate, endDate }) => {
                            return [format(startDate), " - ", format(endDate)];
                        })}
                    </strong>
                    <Icon.Down />
                </button>
            </Dropdown>
        </div>
    );
}
