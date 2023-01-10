import {
    ReactNode,
    useEffect,
    useState,
    CSSProperties,
    createContext,
    useContext,
} from "react";
import { Header } from "@bxreact/header";
import * as Icon from "@bxreact/icon";
import "./index.css";

export const ModalContext = createContext(() => {});

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
                if (event.currentTarget === event.target)
                    onClosed && onClosed();
            }}
        >
            <ModalContext.Provider value={onClosed}>
                <div className="bx-modal_content">{showFx && children}</div>
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
