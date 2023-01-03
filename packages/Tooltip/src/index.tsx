import { useEffect, useState, useRef, useCallback } from "react";
import {
    useFloating,
    flip,
    shift,
    ReferenceType,
} from "@floating-ui/react-dom";
import "./index.css";

interface Props {
    content: any;
    children: any;
    onChange?: (show: boolean) => void;
}

export function Tooltip({ content, children, onChange }: Props): JSX.Element {
    const host = useRef<ReferenceType>();
    const [show, setShow] = useState(false);
    const { x, y, reference, floating, strategy } = useFloating({
        placement: "bottom",
        middleware: [
            flip({
                fallbackPlacements: ["top", "bottom"],
            }),
            shift(),
        ],
    });

    useEffect(() => {
        const handler = (event: Event) => {
            const list = event.composedPath() as ReferenceType[];
            if (!list.includes(host.current)) setShow(false);
        };
        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, []);

    const refCallback = useCallback(
        (node: ReferenceType): void => {
            host.current = node;
            reference(node);
        },
        [reference]
    );

    useEffect(() => {
        if (show != null && onChange) onChange(show);
    }, [show]);

    return (
        <div
            className={`bx-tooltip ${show ? "bx-tooltip--show" : ""}`}
            ref={(node) => refCallback(node)}
            onMouseEnter={() => {
                setShow(true);
            }}
            onMouseLeave={() => {
                setShow(false);
            }}
        >
            <div className="bx-tooltip_children">{children}</div>
            <div
                style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                }}
                ref={floating}
                className="bx-tooltip_space"
            >
                <div className="bx-tooltip_content">{content}</div>
            </div>
        </div>
    );
}
