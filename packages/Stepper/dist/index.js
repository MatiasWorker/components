// src/index.tsx
import { useRef, useState } from "react";
import "@bxreact/theme";
import useResizeObserver from "use-resize-observer";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-stepper {
    display: inline-flex;
    flex-flow: row;
    --border-color: var(--bx-color-grey-time);
    --border-size: 1px;
    --border: var(--border-size) solid var(--border-color);
    font-size: var(--bx-input-sm-font-size);
}

.bx-stepper_group {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 4px;
}

.bx-stepper_step {
    display: flex;
    flex: 0%;
}

.bx-stepper_button {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    border: var(--border);
    color: var(--border-color);
    font-size: unset;
    background: none;
    padding: 0;
    line-height: 0;
}

.bx-stepper_button--active {
    background: var(--bx-color-lblue);
    color: var(--bx-color-white);
    --border: none;
}

.bx-stepper_button--click {
    cursor: pointer;
}

.bx-stepper_line {
    flex: 0%;
    height: var(--border-size);
    background: var(--border-color);
    min-width: 4rem;
    margin-top: 1em;
}

.bx-stepper_label {
    white-space: nowrap;
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function StepLabel({
  children,
  onResize
}) {
  const ref = useRef();
  useResizeObserver({ ref, onResize });
  return /* @__PURE__ */ jsx("div", {
    ref,
    className: "bx-stepper_label",
    children
  });
}
function Stepper({ options, value: currentValue, onChange }) {
  const [sizes, setSizes] = useState({});
  return /* @__PURE__ */ jsx("div", {
    className: "bx-stepper",
    children: options.map(({ value, label }, i) => /* @__PURE__ */ jsxs("div", {
      className: "bx-stepper_step",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "bx-stepper_group",
          children: [
            /* @__PURE__ */ jsx("button", {
              onClick: () => onChange && onChange(value),
              className: `bx-stepper_button ${value === currentValue ? "bx-stepper_button--active " : ""} ${onChange ? "bx-stepper_button--click" : ""}`,
              children: /* @__PURE__ */ jsx("strong", {
                children: value
              })
            }),
            /* @__PURE__ */ jsx(StepLabel, {
              onResize: (value2) => setSizes((sizes2) => ({
                ...sizes2,
                [i]: value2?.width
              })),
              children: label
            })
          ]
        }),
        i < options.length - 1 && /* @__PURE__ */ jsx("div", {
          className: "bx-stepper_line",
          style: {
            marginLeft: ((sizes[i] || 0) - 28) / 2 * -1,
            marginRight: ((sizes[i + 1] || 0) - 28) / 2 * -1
          }
        })
      ]
    }))
  });
}
export {
  Stepper
};
