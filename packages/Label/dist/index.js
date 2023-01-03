// src/index.tsx
import "@bxreact/theme";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-label {
    --gap: 0.25rem;
    width: 100%;
    display: flex;
    gap: var(--gap);
    flex-flow: column;
    font-size: var(--bx-input-sm-font-size);
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

.bx-label--horizontal {
    flex-flow: row;
    align-items: center;
    --gap: 1rem;
}

.bx-label--center {
    display: flex;
    justify-content: center;
}

.bx-label--reverse {
    flex-flow: column-reverse;
}

.bx-label--reverse.bx-label--horizontal {
    flex-flow: row-reverse;
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
  layout
}) {
  const classNameCenter = layout === "center" ? "bx-label--center" : "";
  return /* @__PURE__ */ jsxs("label", {
    className: `bx-label ${reverse ? "bx-label--reverse" : ""} ${layout ? `bx-label--${layout}` : ""} `,
    children: [
      title && /* @__PURE__ */ jsxs("div", {
        className: `bx-label_title ${classNameCenter}`,
        children: [
          title,
          required && /* @__PURE__ */ jsx("span", {
            className: "bx-label_required",
            children: "*"
          })
        ]
      }),
      /* @__PURE__ */ jsx("div", {
        className: `${classNameCenter}`,
        children
      }),
      detail && /* @__PURE__ */ jsx("div", {
        className: `${classNameCenter}`,
        children: detail
      })
    ]
  });
}
export {
  Label
};
