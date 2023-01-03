// src/index.tsx
import { useEffect, useState, useRef, useCallback } from "react";
import {
  useFloating,
  flip,
  shift
} from "@floating-ui/react-dom";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-tooltip {
    --background: var(--bx-tooltip-background, var(--bx-color-lblue-easy));
    --radius: var(--bx-tooltip-radius, 0.25rem);
    position: relative;
    display: inline-block;
    max-width: 100%;
    z-index: 2;
}

.bx-tooltip_space {
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease all;
    min-width: 100%;
    padding: var(--bx-tooltip-space, 0.25rem) 0px;
}

.bx-tooltip_content {
    background: var(--background);
    border-radius: var(--radius);
    font-size: var(--bx-tooltip-font-size, 0.75rem);
    white-space: nowrap;
    padding: var(--bx-tooltip-padding, 0.5rem 0.75rem);
}

.bx-tooltip.bx-tooltip--show .bx-tooltip_space {
    visibility: visible;
    opacity: 1;
}

.bx-tooltip_arrow {
    --size: 12px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--radius);
    position: absolute;
    background: var(--background);
    left: calc(50% - var(--size) / 2);
    transform: rotate(45deg);
}

.bx-tooltip_arrow--bottom {
    top: 0px;
}

.bx-tooltip_arrow--top {
    bottom: 0px;
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Tooltip({ content, children, onChange }) {
  const host = useRef();
  const [show, setShow] = useState(false);
  const { x, y, reference, floating, strategy, placement } = useFloating({
    placement: "bottom",
    middleware: [
      flip({
        fallbackPlacements: ["top", "bottom"]
      }),
      shift()
    ]
  });
  useEffect(() => {
    const handler = (event) => {
      const list = event.composedPath();
      if (!list.includes(host.current))
        setShow(false);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
  const refCallback = useCallback(
    (node) => {
      host.current = node;
      reference(node);
    },
    [reference]
  );
  useEffect(() => {
    if (show != null && onChange)
      onChange(show);
  }, [show]);
  return /* @__PURE__ */ jsxs("div", {
    className: `bx-tooltip ${show ? "bx-tooltip--show" : ""}`,
    ref: (node) => refCallback(node),
    onMouseEnter: () => {
      setShow(true);
    },
    onMouseLeave: () => {
      setShow(false);
    },
    children: [
      /* @__PURE__ */ jsx("div", {
        className: "bx-tooltip_children",
        children
      }),
      /* @__PURE__ */ jsxs("div", {
        style: {
          position: strategy,
          top: y ?? 0,
          left: x ?? 0
        },
        ref: floating,
        className: "bx-tooltip_space",
        children: [
          /* @__PURE__ */ jsx("div", {
            className: `bx-tooltip_arrow bx-tooltip_arrow--${placement}`
          }),
          /* @__PURE__ */ jsx("div", {
            className: "bx-tooltip_content",
            children: content
          })
        ]
      })
    ]
  });
}
export {
  Tooltip
};
