import "@bxreact/theme";
import type { Status } from "@bxreact/theme";
import { ReactNode } from "react";
import "./index.css";
export declare function Label({ title, reverse, children, detail, required, description, layout, icon, status, }: {
    title?: ReactNode;
    children?: ReactNode;
    detail?: ReactNode;
    description?: ReactNode;
    reverse?: boolean;
    required?: boolean;
    icon?: ReactNode;
    status?: Status;
    layout?: "vertical" | "horizontal" | "center";
}): JSX.Element;
