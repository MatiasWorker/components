import { ReactNode, useEffect, useState, CSSProperties } from "react";
import "./index.css";

export function Modal({
    children,
    show,
    zIndex,
    position = "fixed",
    onClosed,
}: {
    children: ReactNode;
    show?: boolean;
    zIndex?: number;
    position?: "absolute" | "fixed";
    onClosed?: () => void;
}): JSX.Element {
    const cssProps: CSSProperties = {};

    const [showFx, setShowFx] = useState(show);

    useEffect(() => {
        if (!showFx && show) setShowFx(true);
    }, [show]);

    if (zIndex) cssProps.zIndex = zIndex;

    return (
        <div
            className={`bx-modal bx-modal--${position} bx-modal--${
                show ? "show" : "hide"
            }`}
            style={cssProps}
            onTransitionEnd={() => {
                if (!show) setShowFx(false);
            }}
            onClick={(event) => {
                if (event.currentTarget === event.target) onClosed();
            }}
        >
            <div className="bx-modal_content">{showFx && children}</div>
        </div>
    );
}
