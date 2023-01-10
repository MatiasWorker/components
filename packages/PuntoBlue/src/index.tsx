import { HTMLAttributes } from "react";
import { Card, Props as PropsCard } from "@bxreact/card";
import * as Icon from "@bxreact/icon";
import "./index.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string;
    status: string;
    schedule: {
        [type: string]: { from: string; to: string }[];
    };
    address: string;
    checked?: boolean;
}

export const Week = {
    monday: "lun",
    tuesday: "mar",
    wednesday: "mir",
    thursday: "jue",
    friday: "vie",
    saturday: "sab",
    holidays: "festivos",
};

export function getHumanSchedule(data: Props["schedule"]) {
    const list = Object.entries(data).reduce<{
        [id: string]: string[];
    }>((groups, [id, config]) => {
        config.map((item) => {
            const did = item.from + " - " + item.to;
            groups[did] = groups[did] || [];
            groups[did].push(id);
        });
        return groups;
    }, {});

    return Object.entries(list).map(
        ([id, week]) =>
            Week[week.at(0)] +
            (week.length > 1 ? " - " + Week[week.at(-1)] : "") +
            " " +
            id
    );
}

export function PuntoBlue({
    title,
    status,
    schedule,
    address,
    checked,
}: Props): JSX.Element {
    const props: Omit<PropsCard, "children"> = {
        bgColor: checked ? "blue" : "grey-up",
        color: checked ? "white" : "unset",
    };

    return (
        <Card {...props} className="bx-punto-blue" padding="md sm">
            <div className="bx-punto-blue_left">
                <div className="bx-punto-blue_title">
                    <b>{title}</b>
                </div>
                <div className="bx-punto-blue_address">
                    <Icon.Place
                        size="1.25rem"
                        color={checked ? "white" : "blue"}
                    ></Icon.Place>
                    <span>{address}</span>
                </div>
            </div>
            <div className="bx-punto-blue_right">
                <div className="bx-punto-blue_status">{status}</div>
                <div className="bx-punto-blue_schedule">
                    {getHumanSchedule(schedule).map((value) => (
                        <div className="bx-punto-blue_date">{value}</div>
                    ))}
                </div>
            </div>
        </Card>
    );
}
