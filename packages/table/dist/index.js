// src/index.tsx
import { createElement as _jsx } from "react";

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
    padding: var(--table-field-padding);
    box-sizing: border-box;
}
`;

// src/index.tsx
function TableCell({ children }) {
  return /* @__PURE__ */ _jsx("div", {
    className: "table_cell"
  }, children);
}
function Table({
  data,
  header,
  types
}) {
  const headerEntries = Object.entries(header);
  const getCell = (row, prop, value) => {
    const cell = prop in types ? types[prop](row, value) : types.default ? types.default(row, value) : value;
    return typeof cell === "object" ? cell : /* @__PURE__ */ _jsx(TableCell, null, cell);
  };
  return /* @__PURE__ */ _jsx("table", {
    className: "table"
  }, /* @__PURE__ */ _jsx("thead", {
    className: "table_thead"
  }, /* @__PURE__ */ _jsx("tr", {
    className: "table_tr"
  }, headerEntries.map(([prop, value]) => /* @__PURE__ */ _jsx("td", {
    className: "table_td table_td--transparent table_cell"
  }, value)))), /* @__PURE__ */ _jsx("tbody", {
    className: "table_tbody"
  }, data.map((row) => /* @__PURE__ */ _jsx("tr", {
    className: "table_tr"
  }, headerEntries.map(([prop]) => [prop, row[prop]]).map(([prop, value], key) => /* @__PURE__ */ _jsx("td", {
    className: `table_td ${prop === "id" ? "table_td--transparent" : ""}`
  }, getCell(row, prop, value)))))));
}
export {
  Table,
  TableCell
};
