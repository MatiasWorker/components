// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-field-select {
    --select-background: var(--bx-select-background, #eaf8ff);
    --select-border-radius: var(--bx-lect-border-radius, 5px);
    --select-space-x: var(--bx-lect-space-x, 8px);
    --select-font-weight: var(--bx-lect-font-weight, 700);
    --select-font-size: var(--bx-lect-font-size, 12px);
    --select-icon-width: var(--bx-lect-icon-width, 15px);
    --select-icon-color: var(--bx-select-icon-color, #ff7a00);
    --select-width: 100%;
    position: relative;
    font-weight: var(--select-font-weight);
    font-size: var(--select-font-size);
}

.bx-field-select--cell {
    min-width: 100%;
    height: 100%;
    --select-width: auto;
    --select-border-radius: 0px;
    --select-font-weight: unset;
    --select-font-size: unset;
    --select-background: transparent;
}

.bx-field-select--danger {
    --select-background: var(--bx-field-select-warning, #fe9292);
}

.bx-field-text--success {
    --select-background: var(--bx-field-select-success, transparent);
}

.bx-field-text--warning {
    --select-background: var(--bx-field-select-warning, transparent);
}

.bx-field-select_select {
    width: var(--select-width);
    min-height: 100%;
    min-width: 100%;
    margin: 0;
    background: var(--select-background);
    border-radius: var(--select-border-radius);
    border: none;
    font-family: unset;
    font-weight: unset;
    font-size: unset;
    box-sizing: border-box;
    padding: 0px var(--select-space-x);
}

.bx-field-select_select option {
    background: white;
    color: black;
}

.bx-field-select--pagination .bx-field-select_select {
    appearance: none;
    padding: calc(var(--select-space-x) / 2)
        calc(var(--select-space-x) * 2 + var(--select-icon-width))
        calc(var(--select-space-x) / 2) var(--select-space-x);
}

.bx-field-select_icon {
    position: absolute;
    width: var(--select-icon-width);
    top: 50%;
    right: var(--select-space-x);
    transform: translateY(-50%);
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function FieldSelect({
  value,
  placeholder,
  options = [],
  onChange,
  appearance,
  status
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: `bx-field-select bx-field-select--${appearance} bx-field-select--${status}`,
    children: [
      appearance === "pagination" && /* @__PURE__ */ jsx("svg", {
        className: "bx-field-select_icon",
        width: "15",
        height: "9",
        viewBox: "0 0 15 9",
        fill: "none",
        children: /* @__PURE__ */ jsx("path", {
          d: "M14.3215 0.97836C14.0343 0.696178 13.5809 0.696178 13.2937 0.97836L7.64797 6.52545L1.75287 0.970934C1.46567 0.696178 1.00464 0.703604 0.732562 0.993211C0.46048 1.28282 0.46048 1.72837 0.755235 1.9957L7.15671 8.03289C7.30031 8.16656 7.48169 8.23339 7.66308 8.23339C7.85203 8.23339 8.03341 8.16656 8.17701 8.02547L14.3215 1.98827C14.6012 1.70609 14.6012 1.26054 14.3215 0.97836Z",
          fill: "var(--select-icon-color)"
        })
      }),
      /* @__PURE__ */ jsxs("select", {
        value: value || "",
        className: "bx-field-select_select",
        onChange: (event) => {
          onChange && onChange(event.currentTarget.value);
        },
        children: [
          placeholder && /* @__PURE__ */ jsx("option", {
            value: "",
            disabled: true,
            children: placeholder
          }, "placeholder"),
          options.map((option) => /* @__PURE__ */ jsx("option", {
            value: option.value,
            children: option.label
          }, option.value))
        ]
      })
    ]
  });
}
export {
  FieldSelect
};
