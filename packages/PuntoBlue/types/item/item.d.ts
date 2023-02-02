import "./item.css";
export interface ItemProps {
    title: string;
    status: string;
    schedule: {
        [type: string]: {
            from: string;
            to: string;
        }[];
    };
    address: string;
    checked?: boolean;
    value?: string;
    onChange?: (value: string) => any;
}
export declare const Week: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    holidays: string;
};
export declare function getHumanSchedule(data: ItemProps["schedule"]): string[];
export declare function PuntoBlueItem({ title, status, schedule, address, checked, value, onChange, }: ItemProps): JSX.Element;
