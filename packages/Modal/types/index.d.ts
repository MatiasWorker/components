import { ReactNode } from "react";
import "./index.css";
export declare const ModalContext: import("react").Context<(event: any) => any>;
export declare function Modal({ children, show, zIndex, position, onClosed, maxWidth, enableCloseByBackground, }: {
    children: ReactNode;
    show?: boolean;
    zIndex?: number;
    position?: "absolute" | "fixed";
    maxWidth?: string;
    onClosed?: () => void;
    enableCloseByBackground?: boolean;
}): JSX.Element;
export declare function ModalHeader({ children, small, }: {
    children: ReactNode;
    small?: boolean;
}): JSX.Element;
