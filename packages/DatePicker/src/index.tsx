import { useEffect, useState } from "react";
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
    const [currentRange, setCurrentRange] = useState<InternalRange>(range);

    useEffect(() => {
        if (range != currentRange) setCurrentRange(range);
    }, [range]);

    return (
        <div className="form-date-picker">
            <Dropdown
                onChange={(show) => {
                    if (!show && currentRange != range) onChange(range);
                }}
                content={
                    <DateRange
                        locale={es}
                        ranges={[{ ...currentRange, key: "range" }]}
                        maxDate={now}
                        onChange={({ range }) =>
                            setCurrentRange(range as InternalRange)
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
                    <Icon.Down size="1em" />
                </button>
            </Dropdown>
        </div>
    );
}
