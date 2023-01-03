// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-card {
    width: 100%;
    max-width: var(--bx-card-max-width);
    background: var(--card-background);
    border-radius: var(--card-radius);
    box-shadow: var(--card-shadow);
    color: var(--card-color);
}

.bx-card--deep-1 {
    --card-shadow: var(--bx-card-lg-shadow);
}

.bx-card--deep-2 {
    --card-shadow: var(--bx-card-md-shadow);
}

.bx-card--with-border {
    border: 1px solid var(--card-brcolor);
}
`;

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function Card({
  children,
  className,
  deep = 1,
  radius = "md",
  bgColor = "white",
  color = "unset",
  brColor = "",
  theme = "",
  ...props
}) {
  const listClassName = ["bx-card"];
  if (deep)
    listClassName.push(`bx-card--deep-${deep}`);
  if (className)
    listClassName.push(className);
  if (theme) {
    brColor = `alert-${theme}-border`;
    bgColor = `alert-${theme}-bg`;
    color = `alert-${theme}-fg`;
  }
  if (brColor)
    listClassName.push(`bx-card--with-border`);
  return /* @__PURE__ */ jsx("div", {
    ...props,
    className: listClassName.join(" "),
    style: {
      ...props.style,
      "--card-radius": `var(--bx-${radius}-radius)`,
      "--card-background": `var(--bx-color-${bgColor})`,
      "--card-color": `var(--bx-color-${color})`,
      "--card-brColor": `var(--bx-color-${brColor})`
    },
    children
  });
}
export {
  Card
};
