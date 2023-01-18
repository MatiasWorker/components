// src/index.tsx
import "@bxreact/theme";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-label_row {
    --gap: 0.25rem;
    width: 100%;
    display: flex;
    gap: var(--gap);
    flex-flow: column;
    font-size: var(--bx-font-size-text-2);
}

.bx-label_required {
    color: var(--bx-color-red-alert);
    font-size: 1.2em;
    font-weight: bold;
    line-height: 0;
    margin-left: 0.1em;
    position: relative;
    top: 0.1em;
}

.bx-label_row--horizontal {
    flex-flow: row;
    align-items: center;
    --gap: 1rem;
}

.bx-label--center {
    display: flex;
    justify-content: center;
}

.bx-label_row--reverse {
    flex-flow: column-reverse;
}

.bx-label_row--reverse.bx-label--horizontal {
    flex-flow: row-reverse;
}

.bx-label_detail {
    font-size: var(--bx-font-size-text-3);
}

.bx-label_detail small {
    font-size: var(--bx-font-size-text-4);
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Label({
  title,
  reverse,
  children,
  detail,
  required,
  layout,
  icon
}) {
  const classNameCenter = layout === "center" ? "bx-label--center" : "";
  return /* @__PURE__ */ jsx("label", {
    className: "bx-label",
    children: /* @__PURE__ */ jsxs("div", {
      className: "bx-label_row bx-label_row--horizontal",
      children: [
        !!icon && /* @__PURE__ */ jsx("div", {
          className: "bx-label_icon",
          children: icon
        }),
        /* @__PURE__ */ jsxs("div", {
          className: `bx-label_row ${reverse ? "bx-label_row--reverse" : ""} ${layout ? `bx-label_row--${layout}` : ""} `,
          children: [
            !!title && /* @__PURE__ */ jsxs("div", {
              className: `bx-label_title ${classNameCenter}`,
              children: [
                title,
                required && /* @__PURE__ */ jsx("span", {
                  className: "bx-label_required",
                  children: "*"
                })
              ]
            }),
            !!children && /* @__PURE__ */ jsx("div", {
              className: `bx-label_content ${classNameCenter}`,
              children
            }),
            !!detail && /* @__PURE__ */ jsx("div", {
              className: `bx-label_detail ${classNameCenter}`,
              children: detail
            })
          ]
        })
      ]
    })
  });
}
export {
  Label
};
