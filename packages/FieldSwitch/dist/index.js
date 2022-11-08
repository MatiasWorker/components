// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-field-switch {
    --switch-space: var(--bx-switch-space, 2px);
    --switch-width: var(--bx-switch-width, 40px);
    --switch-height: var(--bx-switch-height, 19px);
    --switch-transition: var(--bx-switch-transition, 0.25s ease all);
    --switch-fill: var(--bx-switch-fill, #d6e0ff);
    --switch-dot-fill: var(--bx-switch-fill, #fff);
    --switch-fill-checked: var(--bx-switch-fill-checked, #ff7a00);

    ---size: calc(var(--switch-height) - var(--switch-space) * 2);
    ---translate-x: 0px;

    width: var(--switch-width);
    height: var(--switch-height);
    background: var(--switch-fill);
    border-radius: 100px;
    display: flex;
    cursor: pointer;
    transition: var(--switch-transition);
}

.bx-field-switch--checked {
    --switch-fill: var(--switch-fill-checked);
    ---translate-x: calc(var(--switch-width) - var(--switch-height));
}

.bx-field-switch_circle {
    width: var(---size);
    height: var(---size);
    display: block;
    background: var(--switch-dot-fill);
    border-radius: 100px;
    margin: auto 2px;
    transform: translateX(var(---translate-x));
    transition: var(--switch-transition);
}
`;

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function FieldSwitch({ checked, onChange }) {
  return /* @__PURE__ */ jsx("div", {
    className: `bx-field-switch ${checked ? "bx-field-switch--checked" : ""}`,
    onClick: () => onChange && onChange(!checked),
    children: /* @__PURE__ */ jsx("div", {
      className: "bx-field-switch_circle"
    })
  });
}
export {
  FieldSwitch
};
