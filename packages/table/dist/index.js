// src/index.tsx
import { isValidElement } from "react";
import { useFloating, flip, shift } from "@floating-ui/react-dom";
import { Info } from "@bxreact/icon";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-table {
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
        0px 4px 6px rgba(0, 0, 0, 0.1)
    );

    width: 100%;
    background: var(--table-background);
    font-size: var(--table-font-size);
    border-spacing: 0px;
}

.bx-table_thead {
    font-weight: var(--table-font-bold);
}

.bx-table_td {
    height: var(--table-row-min-height);
    padding: 0px;
    border-bottom: var(--table-row-border-bottom);
    background: var(--table-row-background);
}

.bx-table_td--transparent {
    background: transparent;
}

.bx-table_cell {
    min-height: 100%;
    color: var(--table-cell-color, unset);
    background: var(--table-cell-background, unset);
    position: relative;
}

.bx-table_cell_content {
    display: flex;
    min-height: var(--table-row-min-height);
    align-items: var(--table-cell-align, center);
    box-sizing: border-box;
    padding: var(--table-field-padding);
    white-space: nowrap;
    gap: 0.5em;
    line-height: 1;
    justify-content: space-between;
}

.bx-table_cell_tooltip {
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
    transform: translateY(var(--tooltip-position));
    z-index: 100;
}

.bx-table_cell:hover {
    --tooltip-opacity: 1;
    --tooltip-visibility: visible;
}

.bx-table.bx-table--collapse {
    --table-row-min-height: auto;
}

.bx-table.bx-table--collapse tr {
    display: grid;
    border: var(--table-row-border-bottom);
}

.bx-table.bx-table--collapse tr:not(:last-child) {
    border-bottom: none;
}

.bx-table.bx-table--collapse td {
    display: grid;
    border: none;
    padding: var(--table-field-padding);
    justify-content: flex-start;
    gap: 0.5em;
}

.bx-table.bx-table--collapse .bx-table_thead {
    display: none;
}

.bx-table.bx-table--collapse .bx-table_cell_content {
    padding: 0px;
}

.bx-table.bx-table--collapse .bx-table_label {
    font-weight: var(--table-font-bold);
}
`;

// src/index.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function TableCell({
  children,
  color,
  background,
  align,
  className,
  tooltip,
  tooltipIcon = /* @__PURE__ */ jsx(Info, {
    size: "1rem",
    color: "lblue"
  })
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
  return /* @__PURE__ */ jsxs("div", {
    ref: reference,
    className: `bx-table_cell ${className || ""}`,
    style,
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "bx-table_cell_content",
        children: [
          children,
          tooltip && tooltipIcon
        ]
      }),
      tooltip && /* @__PURE__ */ jsx("div", {
        className: `bx-table_cell_tooltip`,
        ref: floating,
        style: {
          position: strategy,
          top: y ?? 0,
          left: x ?? 0
        },
        children: tooltip
      })
    ]
  });
}
function Table({
  data,
  header,
  types,
  rowStyle,
  collapse
}) {
  const headerEntries = Object.entries(header);
  const getCell = (row, prop, value) => {
    const cell = types ? prop in types ? types[prop](row, value, prop) : types.default ? types.default(row, value, prop) : value : value;
    return typeof cell === "object" ? cell : /* @__PURE__ */ jsx(TableCell, {
      children: cell
    });
  };
  const getLabel = (value) => isValidElement(value) && value.type === TableCell ? value.props.label : false;
  return /* @__PURE__ */ jsxs("table", {
    className: `bx-table ${collapse ? "bx-table--collapse" : ""} `,
    children: [
      /* @__PURE__ */ jsx("thead", {
        className: "bx-table_thead",
        children: /* @__PURE__ */ jsx("tr", {
          className: "bx-table_tr",
          children: headerEntries.map(([prop, value], key) => /* @__PURE__ */ jsx("td", {
            className: `bx-table_td bx-table_td--transparent`,
            children: typeof value === "object" ? value : /* @__PURE__ */ jsx(TableCell, {
              children: value
            })
          }, key + ""))
        })
      }),
      /* @__PURE__ */ jsx("tbody", {
        className: "bx-table_tbody",
        children: data.map((row, key) => /* @__PURE__ */ jsx("tr", {
          className: "bx-table_tr",
          style: rowStyle ? rowStyle(row) : null,
          children: headerEntries.map(([prop, header2]) => [prop, row[prop], header2]).map(([prop, value, header2], key2) => {
            const cell = getCell(row, prop, value);
            const label = collapse ? getLabel(cell) || getLabel(header2) || header2 : false;
            if (collapse && !label)
              return;
            return /* @__PURE__ */ jsx("td", {
              className: `bx-table_td ${prop === "id" ? "bx-table_td--transparent" : ""}`,
              children: label ? /* @__PURE__ */ jsxs(Fragment, {
                children: [
                  /* @__PURE__ */ jsx("div", {
                    className: "bx-table_label ",
                    children: label
                  }),
                  /* @__PURE__ */ jsx("div", {
                    className: "bx-table_value",
                    children: cell
                  })
                ]
              }) : cell
            }, key2 + "");
          })
        }, key + ""))
      })
    ]
  });
}
export {
  Table,
  TableCell
};
