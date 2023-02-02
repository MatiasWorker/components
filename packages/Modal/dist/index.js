// src/index.tsx
import {
  useEffect,
  useState,
  createContext,
  useContext,
  useRef
} from "react";
import { Header } from "@bxreact/header";
import * as Icon from "@bxreact/icon";
import useResizeObserver from "use-resize-observer";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-modal {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.3s ease all;
    background: var(--bx-modal--background, rgba(56, 22, 98, 0.5));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box;
    overflow: auto;
}

.bx-modal.bx-modal--scroll {
    align-items: start;
}

.bx-modal--fixed {
    position: fixed;
}

.bx-modal--show {
    opacity: 1;
    visibility: visible;
}

.bx-modal--hide {
    opacity: 0;
    visibility: hidden;
}

.bx-modal_content {
    width: 100%;
    max-width: var(--bx-modal-max-width, var(--bx-card-max-width));
    padding: 5% 0px;
    box-sizing: border-box;
}

.bx-modal_content > .bx-modal_content {
    --bx-card-max-width: unset;
}

.bx-modal_closed {
    width: 2rem;
    height: 2rem;
    background: transparent;
    box-sizing: border-box;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
`;

// src/index.tsx
import { jsx } from "react/jsx-runtime";
var ModalContext = createContext(() => {
});
function Modal({
  children,
  show,
  zIndex,
  position = "fixed",
  onClosed,
  maxWidth,
  enableCloseByBackground
}) {
  const ref = useRef();
  useResizeObserver({ ref });
  const cssProps = {};
  const [showFx, setShowFx] = useState(show);
  useEffect(() => {
    if (!showFx && show)
      setShowFx(true);
  }, [show]);
  if (zIndex)
    cssProps.zIndex = zIndex;
  if (maxWidth) {
    cssProps["--bx-modal-max-width"] = maxWidth;
  }
  return /* @__PURE__ */ jsx("div", {
    className: `bx-modal bx-modal--${position} bx-modal--${show ? "show" : "hide"} bx-modal--${ref?.current?.parentElement?.scrollHeight > window?.innerHeight ? "scroll" : "unscroll"}`,
    style: cssProps,
    onTransitionEnd: () => {
      if (!show)
        setShowFx(false);
    },
    onClick: (event) => {
      if (enableCloseByBackground && event.currentTarget === event.target)
        onClosed && onClosed();
    },
    children: /* @__PURE__ */ jsx(ModalContext.Provider, {
      value: onClosed,
      children: /* @__PURE__ */ jsx("div", {
        ref,
        className: "bx-modal_content",
        children: showFx && children
      })
    })
  });
}
function ModalHeader({
  children,
  small
}) {
  const onClosed = useContext(ModalContext);
  return /* @__PURE__ */ jsx(Header, {
    small,
    title: children,
    rightIcon: /* @__PURE__ */ jsx("button", {
      className: "bx-modal_closed",
      onClick: onClosed,
      children: /* @__PURE__ */ jsx(Icon.Closed, {})
    })
  });
}
export {
  Modal,
  ModalContext,
  ModalHeader
};
