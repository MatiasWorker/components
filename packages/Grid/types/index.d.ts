import { ReactNode } from "react";
import "./index.css";
export declare function Grid({ children, cols, minWidth, fit, gap, align, }: {
    children: ReactNode;
    gap?: string;
    cols?: number | string;
    minWidth?: string;
    fit?: boolean;
    align?: "start" | "end" | "center";
}): JSX.Element;
