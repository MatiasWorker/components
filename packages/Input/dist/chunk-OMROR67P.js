// src/Checkbox.tsx
import cs from "classnames";

// src/Checkbox.css
import css from "@bxreact/theme/css";
var Checkbox_default = css`.bx-form-checkbox-container {
    --background-checked: var(--bx-color-orange);
    --background: transparent;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    box-sizing: border-box;
    display: block;
}
.bx-form-checkbox-container--checked {
    --background: var(--bx-color-orange);
}
.bx-form-checkbox-container--disabled {
    --background-checked: var(--bx-color-blue-shine);
}
.bx-form-checkbox-container--checked.bx-form-checkbox-container--disabled {
    --background: var(--bx-color-blue-shine);
}
.bx-form-checkbox {
    display: none;
}
.bx-form-checkbox-icon {
    width: 100%;
    height: 100%;
    border-radius: 0.35rem;
    background: var(--background);
    border: 1px solid var(--background-checked);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;

// src/Checkbox.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Checkbox({
  disabled,
  checked,
  ...props
}) {
  console.log(props);
  return /* @__PURE__ */ jsxs("label", {
    className: cs("bx-form-checkbox-container", {
      "bx-form--disabled": disabled,
      "bx-form-checkbox-container--disabled": disabled,
      "bx-form-checkbox-container--checked": checked
    }),
    children: [
      /* @__PURE__ */ jsx("input", {
        className: "bx-form-checkbox",
        type: "checkbox",
        disabled,
        checked,
        ...props
      }),
      /* @__PURE__ */ jsx("div", {
        className: "bx-form-checkbox-icon",
        children: checked && /* @__PURE__ */ jsx("svg", {
          width: "9",
          height: "7",
          viewBox: "0 0 9 7",
          fill: "none",
          children: /* @__PURE__ */ jsx("path", {
            d: "M3.60837 7C3.49222 7 3.37982 6.9507 3.28989 6.84763L0.142513 3.24008C-0.041084 3.02945 -0.0485777 2.6799 0.127526 2.46031C0.303629 2.24072 0.595885 2.23175 0.779482 2.44238L3.59713 5.67798L8.20954 0.161332C8.38939 -0.0537772 8.68165 -0.0537772 8.8615 0.161332C9.04135 0.37644 9.04135 0.725992 8.8615 0.941101L3.93435 6.83867C3.84443 6.94622 3.72453 7 3.60837 7Z",
            fill: "white"
          })
        })
      })
    ]
  });
}

export {
  Checkbox
};
