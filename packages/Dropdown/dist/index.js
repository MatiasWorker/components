// src/index.tsx
import { useEffect, useState, useRef, useCallback } from "react";
import {
  useFloating,
  flip,
  shift
} from "@floating-ui/react-dom";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-dropdown {
    position: relative;
    display: inline-block;
    max-width: 100%;
    z-index: 2;
}

.bx-dropdown_space {
    min-width: 100%;
    padding: var(--bx-dropdown-space, 0.25rem) 0px;
}

.bx-dropdown_content {
    background: var(--bx-card-background);
    border-radius: var(--bx-card-radius);
    box-shadow: var(--bx-card-md-shadow);
    font-size: var(--bx-dropdown-font-size, 12px);
    white-space: nowrap;
}

.bx-dropdown_content ul {
    padding: 0px;
    appearance: none;
    margin: 0px;
}

.bx-dropdown_content li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: var(--bx-dropdown-gap, 1rem);
    padding: var(--bx-dropdown-padding, 0.5rem 1rem);
    box-sizing: border-box;
    align-items: center;
}

.bx-dropdown_content li:not(:last-child) {
    border-bottom: 1px solid var(--bx-color-blue-clear);
}

.bx-dropdown_children {
    cursor: pointer;
}

.bx-dropdown_space {
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease all;
}

.bx-dropdown.bx-dropdown--show .bx-dropdown_space {
    visibility: visible;
    opacity: 1;
}

.bx-dropdown_header {
    padding: var(--bx-dropdown-header-padding, 0.875rem 1rem 0.5rem);
    font-weight: var(--bx-dropdow-header-font-weight, 800);
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Dropdown({ content, children, onChange }) {
  const host = useRef();
  const [show, setShow] = useState(false);
  const { x, y, reference, floating, strategy } = useFloating({
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
    className: `dropdown ${show ? "dropdown--show" : ""}`,
    ref: (node) => refCallback(node),
    children: [
      /* @__PURE__ */ jsx("div", {
        onClick: () => {
          setShow(!show);
        },
        className: "dropdown_children",
        children
      }),
      /* @__PURE__ */ jsx("div", {
        style: {
          position: strategy,
          top: y ?? 0,
          left: x ?? 0
        },
        ref: floating,
        className: "dropdown_space",
        children: /* @__PURE__ */ jsx("div", {
          className: "dropdown_content",
          children: content
        })
      })
    ]
  });
}
export {
  Dropdown
};
