// src/index.tsx
import { createElement as _jsx } from "react";

// src/index.css
import css from "ustyler";
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
function Card({ size, children }) {
  const className = ["card"];
  if (size)
    className.push(`card--size-${size}`);
  return /* @__PURE__ */ _jsx("div", {
    className: className.join(" ")
  }, children);
}
export {
  Card
};
