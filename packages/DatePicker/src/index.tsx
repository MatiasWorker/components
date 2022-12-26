import "@bxreact/input";
import { useEffect, useState } from "react";
import { DateRange, CalendarProps } from "react-date-range";
import { es } from "date-fns/locale";
import { Dropdown } from "@bxreact/dropdown";
import * as Icon from "@bxreact/icon";
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

export function DatePickerRange({
    onChange,
    range,
    ...dateRangeProps
}: Props & Omit<CalendarProps, "onChange">) {
    const [currentRange, setCurrentRange] = useState<InternalRange>(range);

    useEffect(() => {
        if (range != currentRange) setCurrentRange(range);
    }, [range]);

    return (
        <div className="bx-form-date-picker">
            <Dropdown
                onChange={(show) => {
                    if (!show && currentRange != range) onChange(currentRange);
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
                        {...dateRangeProps}
                    />
                }
            >
                <button className="bx-form-input bx-form-input-button">
                    <Icon.Calendar size="1em" />
                    <strong className="bx-form-input-button_label">
                        {[range].map(({ startDate, endDate }) => {
                            return [format(startDate), " - ", format(endDate)];
                        })}
                    </strong>
                    <Icon.Down size="1em" color="lblue-well" />
                </button>
            </Dropdown>
        </div>
    );
}
