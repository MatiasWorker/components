import "@bxreact/theme";
import { ReactNode } from "react";
import "./index.css";
export declare function Label({ title, reverse, children, detail, required, layout, icon, }: {
    title?: ReactNode;
    children?: ReactNode;
    detail?: ReactNode;
    reverse?: boolean;
    required?: boolean;
    icon?: ReactNode;
    layout?: "vertical" | "horizontal" | "center";
}): JSX.Element;
