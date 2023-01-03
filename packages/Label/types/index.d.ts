import "@bxreact/theme";
import { ReactNode } from "react";
import "./index.css";
export declare function Label({ title, reverse, children, detail, required, layout, }: {
    title: ReactNode;
    children?: ReactNode;
    detail?: ReactNode;
    reverse?: boolean;
    required?: boolean;
    layout?: "vertical" | "horizontal" | "center";
}): JSX.Element;
