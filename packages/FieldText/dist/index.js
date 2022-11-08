// src/index.tsx
import { useState, useRef } from "react";
import useResizeObserver from "use-resize-observer";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-field-text {
    --field-text-add-width: 30px;
    --field-text-background: transparent;
    --field-text-active-background: var(
        --bx-field-text-active-background,
        var(--field-text-background)
    );
    --field-text-min-height: var(--table-row-min-height, 48px);
    --field-text-padding: var(--table-field-padding, 10px);
    min-width: calc(var(--min-width, 0) + var(--field-text-add-width));
    display: flex;
    align-items: stretch;
    position: relative;
    overflow: hidden;
    background: var(--field-text-background);
    height: var(--field-text-min-height);
    box-sizing: border-box;
}

.bx-field-text--success {
    --field-text-background: var(--bx-field-text-success, transparent);
}

.bx-field-text--warning {
    --field-text-background: var(--bx-field-text-warning, transparent);
}

.bx-field-text--danger {
    --field-text-background: var(--bx-field-text-warning, #fe9292);
}

.bx-field-text--edited {
    --field-text-background: var(--bx-field-text-edited, transparent);
}

.bx-field-text_input {
    width: 100%;
    padding: var(--field-text-padding);
    box-sizing: border-box;
    border: none;
    position: relative;
    z-index: 1;
}

.bx-field-text_input:not([disabled]) {
    background: var(--field-text-active-background);
}

.bx-field-text_reflect {
    width: auto;
    height: auto;
    position: fixed;
    opacity: 0;
    z-index: 0;
    visibility: hidden;
    white-space: nowrap;
}

.bx-field-text_mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.bx-field-text--danger {
    padding: 6.5px 4px;
    --field-text-add-width: 34px;
}

.bx-field-text--danger .bx-field-text_input {
    background: var(--bx-input-bgcolor);
    color: var(--bx-input-color);
    border: var(--bx-input-border) var(--bx-color-red-alert);
    border-radius: var(--bx-input-xs-radius);
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function FieldText({
  value,
  type,
  className,
  onChange,
  minLength,
  maxLength,
  min,
  max,
  status = "",
  disabled
}) {
  const [focus, setFocus] = useState();
  const refInput = useRef();
  const resize = useResizeObserver();
  return /* @__PURE__ */ jsxs("div", {
    className: `bx-field-text bx-field-text--${status} ${focus ? "bx-field-text--focus" : ""} ${className ? className : ""}`,
    style: resize.width ? { "--min-width": `${resize.width}px` } : {},
    children: [
      /* @__PURE__ */ jsx("div", {
        ref: resize.ref,
        className: "bx-field-text_input bx-field-text_reflect",
        children: value
      }),
      /* @__PURE__ */ jsx("input", {
        disabled,
        className: "bx-field-text_input",
        value,
        ref: refInput,
        type,
        minLength,
        maxLength,
        min,
        max,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        onInput: (event) => {
          onChange && onChange(event.currentTarget.value);
        }
      })
    ]
  });
}
export {
  FieldText
};
