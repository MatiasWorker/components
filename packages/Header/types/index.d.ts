import "@bxreact/theme";
import { ReactNode } from "react";
import "./index.css";
export declare function Header({ title, children, required, small, rightIcon, leftIcon, }: {
    title: ReactNode;
    required?: boolean;
    children?: ReactNode;
    small?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}): JSX.Element;
