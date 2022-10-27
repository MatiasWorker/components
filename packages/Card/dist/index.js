// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.card {
    --card-shadow: var(--bx-card-lg-shadow);
    --card-radius: var(--bx-card-radius);

    width: 100%;
    max-width: var(--bx-card-max-width);
    background: white;
    box-shadow: var(--card-shadow);
    border-radius: var(--card-radius);
}

.card--size-md {
    --card-shadow: var(--bx-card-md-shadow);
}
`;

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function Card({
  size,
  children,
  className,
  ...props
}) {
  const listClassName = ["card"];
  if (size)
    listClassName.push(`card--size-${size}`);
  if (className)
    listClassName.push(className);
  return /* @__PURE__ */ jsx("div", {
    ...props,
    className: listClassName.join(" "),
    children
  });
}
export {
  Card
};
