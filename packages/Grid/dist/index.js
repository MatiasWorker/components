// src/index.tsx
import { useRef, useState } from "react";
import useResizeObserver from "use-resize-observer";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-grid {
    --grid-max-width: var(--bx-grid-max-width, 1024px);
    --gap-x: 4rem;
    --gap-y: 1.25rem;
    --gap: var(--gap-y) var(--gap-x);
    --columns: 1;
    --column: calc(
        (var(--grid-max-width) - (var(--gap-x) * var(--columns))) /
            var(--columns)
    );
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: var(
        --columns-raw,
        repeat(var(--mode), minmax(var(--min-width, var(--column)), 1fr))
    );
    gap: var(--gap);
    box-sizing: border-box;
    padding: var(--padding);
    align-items: var(--align);
}

.bx-grid--only {
    display: flex;
    flex-flow: column;
}
`;

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function Grid({
  children,
  cols = 1,
  minWidth,
  fit,
  gap,
  align
}) {
  const [forceOnly, setForceOnly] = useState(false);
  const ref = useRef();
  const typeCols = typeof cols;
  const customProperties = {
    "--columns": typeCols === "number" ? cols : 1,
    "--mode": `auto-${fit ? "fit" : "fill"}`
  };
  if (typeCols === "string")
    customProperties["--columns-raw"] = cols;
  if (minWidth)
    customProperties["--min-width"] = minWidth;
  if (gap)
    customProperties["--gap"] = gap;
  if (align)
    customProperties["--align"] = align;
  useResizeObserver({
    ref,
    onResize(rect) {
      if (typeCols === "string" && minWidth) {
        const [, unit, type] = minWidth.match(/(.+)(px|rem)$/);
        const value = type == "rem" ? Number(
          getComputedStyle(document.body).fontSize.replace(
            "px",
            ""
          )
        ) * Number(unit) : Number(unit);
        if (value >= rect.width) {
          setForceOnly(true);
        } else {
          setForceOnly(false);
        }
      }
    }
  });
  return /* @__PURE__ */ jsx("div", {
    className: `bx-grid ${forceOnly || cols === 1 && !minWidth ? "bx-grid--only" : ""}`,
    style: customProperties,
    ref,
    children
  });
}
export {
  Grid
};
