// src/Radio/index.tsx
import cs from "classnames";

// src/Radio/index.css
import css from "@bxreact/theme/css";
var Radio_default = css`.bx-form-radio-container {
    --background-checked: var(--bx-color-orange);
    --background: transparent;
    --size: 2rem;
    width: var(--size);
    height: var(--size);
    min-width: var(--size);
    min-height: var(--size);
    padding: 0.5rem;
    box-sizing: border-box;
    display: block;
    cursor: pointer;
}
.bx-form-radio-container--checked {
    --background: var(--bx-color-orange);
}
.bx-form-radio-container--disabled {
    --background-checked: var(--bx-color-blue-shine);
}
.bx-form-radio-container--checked.bx-form-radio-container--disabled {
    --background: var(--bx-color-blue-shine);
}
.bx-form-radio {
    display: none;
}
.bx-form-radio-icon {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 1px solid var(--background-checked);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}
.bx-form-radio-dot {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 100%;
    background: var(--background);
}
`;

// src/Radio/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Radio({
  disabled,
  checked,
  ...props
}) {
  return /* @__PURE__ */ jsxs("label", {
    className: cs("bx-form-radio-container", {
      "bx-form--disabled": disabled,
      "bx-form-radio-container--disabled": disabled,
      "bx-form-radio-container--checked": checked
    }),
    children: [
      /* @__PURE__ */ jsx("input", {
        ...props,
        className: "bx-form-radio",
        type: "radio",
        disabled,
        checked,
        onChange: (event) => props?.onChange(event)
      }),
      /* @__PURE__ */ jsx("div", {
        className: "bx-form-radio-icon",
        children: /* @__PURE__ */ jsx("div", {
          className: "bx-form-radio-dot"
        })
      })
    ]
  });
}

export {
  Radio
};
