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
}

export function Dropdown({ content, children }: Props): JSX.Element {
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

    return (
        <div
            className={`dropdown ${show ? "dropdown--show" : ""}`}
            ref={(node) => refCallback(node)}
        >
            <div
                onClick={() => {
                    setShow(!show);
                }}
                className="dropdown_children"
            >
                {children}
            </div>
            <div
                ref={floating}
                style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                }}
                className="dropdown_content"
            >
                {content}
            </div>
        </div>
    );
}