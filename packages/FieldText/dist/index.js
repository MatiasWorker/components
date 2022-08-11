// src/index.tsx
import { createElement as _jsx } from "react";
import { useState, useRef } from "react";
import useResizeObserver from "use-resize-observer";

// src/index.css
import css from "ustyler";
var src_default = css`.field-text {
    --field-text-background: transparent;
    --field-text-active-background: var(
        --bx-field-text-active-background,
        var(--field-text-background)
    );
    --field-text-min-height: var(--table-row-min-height, 48px);
    --field-text-padding: var(--table-field-padding, 10px);
    min-width: calc(var(--min-width, 0) + 20px);
    position: relative;
    overflow: hidden;
}

.field-text--success {
    --field-text-background: var(--bx-field-text-success, transparent);
}

.field-text--warning {
    --field-text-background: var(--bx-field-text-warning, transparent);
}

.field-text--danger {
    --field-text-background: var(--bx-field-text-warning, #fe9292);
}

.field-text--edited {
    --field-text-background: var(--bx-field-text-edited, transparent);
}

.field-text_input {
    width: 100%;
    padding: var(--field-text-padding);
    min-height: var(--field-text-min-height);
    box-sizing: border-box;
    border: none;
    background: var(--field-text-background);
    position: relative;
    z-index: 1;
}

.field-text_input:not([disabled]) {
    background: var(--field-text-active-background);
}

.field-text_reflect {
    width: auto;
    height: auto;
    position: fixed;
    opacity: 0;
    z-index: 0;
    visibility: hidden;
}

.field-text_mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}
`;

// src/index.tsx
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
  const [edited, setEdited] = useState();
  const refInput = useRef();
  const resize = useResizeObserver();
  return /* @__PURE__ */ _jsx("div", {
    className: `field-text field-text--${edited ? "edited" : status} ${focus ? "field-text--focus" : ""} ${className ? className : ""}`,
    style: resize.width ? { "--min-width": `${resize.width}px` } : {}
  }, /* @__PURE__ */ _jsx("div", {
    ref: resize.ref,
    className: "field-text_input field-text_reflect"
  }, value), /* @__PURE__ */ _jsx("input", {
    disabled,
    className: "field-text_input",
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
      setEdited(true);
      onChange && onChange(event.currentTarget.value);
    }
  }));
}
export {
  FieldText
};
