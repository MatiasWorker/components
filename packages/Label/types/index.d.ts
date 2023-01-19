import "@bxreact/theme";
import { ReactNode } from "react";
import "./index.css";
declare type Status = "info" | "danger" | "warning" | "success";
export declare function Label({ title, reverse, children, detail, required, layout, icon, status, }: {
    title?: ReactNode;
    children?: ReactNode;
    detail?: ReactNode;
    reverse?: boolean;
    required?: boolean;
    icon?: ReactNode;
    status?: Status;
    layout?: "vertical" | "horizontal" | "center";
}): JSX.Element;
export {};
