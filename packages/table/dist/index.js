// src/index.tsx
import { createElement as _jsx } from "react";
import { useFloating, flip, shift } from "@floating-ui/react-dom";

// src/index.css
import css from "ustyler";
var src_default = css`.table {
    --table-background: var(--bx-table-background, #f6f6f6);
    --table-font-size: var(--bx-table-font-size, 12px);
    --table-font-bold: var(--bx-table-font-bold, 600);
    --table-row-min-height: var(--bx-table-row-min-height, 48px);
    --table-row-border-bottom: var(
        --bx-table-row-border-bottom,
        1px solid rgba(0, 0, 0, 0.1)
    );
    --table-row-background: var(--bx-table-row-background, #fff);
    --table-field-padding: 10px;

    --table-tooltip-background: var(--bx-table-tooltip-background, #fff);
    --table-tooltip-border: var(
        --bx-table-tooltip-border,
        var(--table-row-border-bottom)
    );
    --table-tooltip-radius: var(--bx-table-tooltip-radius, 0.5rem);
    --table-tooltip-shadow: var(
        --bx-table-tooltip-shadow,
        0px 2px 4px rgba(0, 0, 0, 0.08)
    );

    width: 100%;
    background: var(--table-background);
    font-size: var(--table-font-size);
    border-spacing: 0px;
}

.table_thead {
    font-weight: var(--table-font-bold);
}

.table_td {
    height: var(--table-row-min-height);
    padding: 0px;
    border-bottom: var(--table-row-border-bottom);
    background: var(--table-row-background);
}

.table_td--transparent {
    background: transparent;
}

.table_cell {
    min-height: 100%;
    color: var(--table-cell-color, unset);
    background: var(--table-cell-background, unset);
    position: relative;
}

.table_cell_content {
    display: flex;
    min-height: var(--table-row-min-height);
    align-items: var(--table-cell-align, center);
    box-sizing: border-box;
    padding: var(--table-field-padding);
    white-space: nowrap;
}

.table_cell_tooltip {
    min-width: 100%;
    padding: var(--table-field-padding);
    background: var(--table-tooltip-background);
    border: var(--table-tooltip-border);
    border-radius: var(--table-tooltip-radius);
    box-sizing: border-box;
    opacity: var(--tooltip-opacity, 0);
    visibility: var(--tooltip-visibility, hidden);
    box-shadow: var(--table-tooltip-shadow);
    transition: 0.23s ease all;
    --tooltip-position: -10px;
    transform: translateY(var(--tooltip-position));
}

.table_cell:hover {
    --tooltip-opacity: 1;
    --tooltip-visibility: visible;
}
`;

// src/index.tsx
function TableCell({
  children,
  color,
  background,
  align,
  className,
  tooltip
}) {
  const style = {};
  const { x, y, reference, floating, strategy } = useFloating({
    placement: "bottom",
    middleware: [
      flip({
        fallbackPlacements: ["top", "bottom"]
      }),
      shift()
    ]
  });
  if (align)
    style["--table-cell-align"] = align;
  if (color)
    style["--table-cell-color"] = color;
  if (background)
    style["--table-cell-background"] = background;
  return /* @__PURE__ */ _jsx("div", {
    ref: reference,
    className: `table_cell ${className || ""}`,
    style
  }, /* @__PURE__ */ _jsx("div", {
    className: "table_cell_content"
  }, children), tooltip && /* @__PURE__ */ _jsx("div", {
    className: `table_cell_tooltip`,
    ref: floating,
    style: {
      position: strategy,
      top: y ?? 0,
      left: x ?? 0
    }
  }, tooltip));
}
function Table({
  data,
  header,
  types,
  rowStyle
}) {
  const headerEntries = Object.entries(header);
  const getCell = (row, prop, value) => {
    const cell = prop in types ? types[prop](row, value, prop) : types.default ? types.default(row, value, prop) : value;
    return typeof cell === "object" ? cell : /* @__PURE__ */ _jsx(TableCell, null, cell);
  };
  return /* @__PURE__ */ _jsx("table", {
    className: "table"
  }, /* @__PURE__ */ _jsx("thead", {
    className: "table_thead"
  }, /* @__PURE__ */ _jsx("tr", {
    className: "table_tr"
  }, headerEntries.map(([prop, value], key) => /* @__PURE__ */ _jsx("td", {
    className: `table_td table_td--transparent`,
    key: key + ""
  }, typeof value === "object" ? value : /* @__PURE__ */ _jsx(TableCell, null, value))))), /* @__PURE__ */ _jsx("tbody", {
    className: "table_tbody"
  }, data.map((row, key) => /* @__PURE__ */ _jsx("tr", {
    key: key + "",
    className: "table_tr",
    style: rowStyle ? rowStyle(row) : null
  }, headerEntries.map(([prop]) => [prop, row[prop]]).map(([prop, value], key2) => /* @__PURE__ */ _jsx("td", {
    key: key2 + "",
    className: `table_td ${prop === "id" ? "table_td--transparent" : ""}`
  }, getCell(row, prop, value)))))));
}
export {
  Table,
  TableCell
};
