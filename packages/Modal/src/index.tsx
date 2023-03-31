import {
    ReactNode,
    useEffect,
    useState,
    CSSProperties,
    createContext,
    useContext,
    useRef,
} from "react";
import { Header } from "@bxreact/header";
import * as Icon from "@bxreact/icon";
import useResizeObserver from "use-resize-observer";
import "./index.css";

export const ModalContext = createContext(
    (event: any) => event && event?.preventDefault?.()
);

export function Modal({
    children,
    show,
    zIndex,
    position = "fixed",
    onClosed,
    maxWidth,
    enableCloseByBackground,
}: {
    children: ReactNode;
    show?: boolean;
    zIndex?: number;
    position?: "absolute" | "fixed";
    maxWidth?: string;
    onClosed?: () => void;
    enableCloseByBackground?: boolean;
}): JSX.Element {
    const ref = useRef<any>();
    useResizeObserver({ ref });

    const cssProps: CSSProperties = {};

    const [showFx, setShowFx] = useState(show);

    useEffect(() => {
        if (!showFx && show) setShowFx(true);
    }, [show]);

    if (zIndex) cssProps.zIndex = zIndex;

    if (maxWidth) {
        cssProps["--bx-modal-max-width"] = maxWidth;
    }

    return (
        <div
            className={`bx-modal bx-modal--${position} bx-modal--${
                show ? "show" : "hide"
            } bx-modal--${
                ref?.current?.parentElement?.scrollHeight > window?.innerHeight
                    ? "scroll"
                    : "unscroll"
            }`}
            style={cssProps}
            onTransitionEnd={() => {
                if (!show) setShowFx(false);
            }}
            onClick={(event) => {
                if (
                    enableCloseByBackground &&
                    event.currentTarget === event.target
                )
                    onClosed && onClosed();
            }}
        >
            <ModalContext.Provider value={onClosed}>
                <div ref={ref} className="bx-modal_content">
                    {showFx && children}
                </div>
            </ModalContext.Provider>
        </div>
    );
}

export function ModalHeader({
    children,
    small,
}: {
    children: ReactNode;
    small?: boolean;
}): JSX.Element {
    const onClosed = useContext(ModalContext);
    return (
        <Header
            small={small}
            title={children}
            rightIcon={
                <button className="bx-modal_closed" onClick={onClosed}>
                    <Icon.Closed />
                </button>
            }
        ></Header>
    );
}
