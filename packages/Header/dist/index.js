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

.bx-header_title {
    display: flex;
    gap: var(--bx-space-md);
}

.bx-header_title_right-icon {
    margin: auto 0px auto auto;
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Header({
  title,
  children,
  required,
  small,
  rightIcon,
  leftIcon
}) {
  const Size = small ? "h3" : "h2";
  return /* @__PURE__ */ jsxs("header", {
    className: "bx-header",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "bx-header_title",
        children: [
          leftIcon && /* @__PURE__ */ jsx("div", {
            className: "bx-header_title_left-icon",
            children: leftIcon
          }),
          /* @__PURE__ */ jsxs(Size, {
            children: [
              title,
              required && /* @__PURE__ */ jsx("span", {
                className: "bx-header_required",
                children: "*"
              })
            ]
          }),
          rightIcon && /* @__PURE__ */ jsx("div", {
            className: "bx-header_title_right-icon",
            children: rightIcon
          })
        ]
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
