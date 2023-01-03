// src/index.tsx
import "@bxreact/theme";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-header_required {
    color: var(--bx-color-red-alert);
    font-size: 1.2em;
    font-weight: 900;
    line-height: 0;
    margin-left: 0.2em;
    position: relative;
    top: 0.2em;
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Header({
  title,
  children,
  required
}) {
  return /* @__PURE__ */ jsxs("header", {
    className: "bx-header",
    children: [
      /* @__PURE__ */ jsx("div", {
        className: "bx-header_title",
        children: /* @__PURE__ */ jsxs("h2", {
          children: [
            title,
            required && /* @__PURE__ */ jsx("span", {
              className: "bx-header_required",
              children: "*"
            })
          ]
        })
      }),
      children && /* @__PURE__ */ jsx("div", {
        className: "bx-header_content",
        children
      })
    ]
  });
}
export {
  Header
};
