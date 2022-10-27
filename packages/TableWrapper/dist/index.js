// src/index.tsx
import { useState } from "react";
import { Table } from "@bxreact/table";
import { usePages } from "@bxreact/use-pages";
import { Pagination } from "@bxreact/pagination";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.table-wrapper {
    width: 100%;
    max-width: 100%;
}
.table-wrapper_overflow {
    overflow-x: auto;
}
.table-wrapper_footer {
    padding: var(--table-wrapper-footer-padding, 0.75rem 1rem);
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var options = {
  paginations: [10, 20, 30, 40],
  labelPaginations: "Filas por p\xE1gina",
  moves: {
    ">": 1,
    ">>": 2,
    "<": -1,
    "<<": -2
  }
};
function TableWrapper({
  data,
  paginations = options.paginations,
  labelPaginations = options.labelPaginations,
  ...propsTable
}) {
  const [pagesPerPage, setPagesPerPage] = useState(options.paginations[0]);
  const pages = usePages(data, {
    page: 0,
    pages: pagesPerPage
  });
  return /* @__PURE__ */ jsxs("div", {
    className: "table-wrapper",
    children: [
      /* @__PURE__ */ jsx("div", {
        className: "table-wrapper_overflow",
        children: /* @__PURE__ */ jsx(Table, {
          data: pages.group,
          ...propsTable
        })
      }),
      /* @__PURE__ */ jsx("div", {
        className: "table-wrapper_footer",
        children: /* @__PURE__ */ jsx(Pagination, {
          isMoveDisabled: (type) => pages.isDisabled(options.moves[type]),
          pagesPerPage: paginations,
          pagedLabel: labelPaginations,
          moveLabel: `${pages.position.start} - ${pages.position.end} de ${pages.position.length}`,
          onChangePagesPerPage: (value) => setPagesPerPage(Number(value)),
          onChangeMove: (type) => pages.to(options.moves[type])
        })
      })
    ]
  });
}
export {
  TableWrapper,
  options
};
