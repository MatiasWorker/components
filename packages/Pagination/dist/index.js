// src/index.tsx
import { FieldSelect } from "@bxreact/field-select";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-pagination {
    --pagination-button-padding: var(--bx-pagination-button-padding, 7px);
    --pagination-label-padding: var(--bx-pagination-label-padding, 4px);
    --pagination-gap: var(--bx-pagination-gap, 24px);
    --pagination-font-size: var(--bx-pagination-font-size, 12px);
    --pagination-move-color: var(--bx-pagination-move-color, #ff7a00);

    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    justify-content: start;
    line-height: 1em;
    grid-gap: var(--pagination-gap);
    font-size: var(--pagination-font-size);
}

.bx-pagination_paged_label {
    padding: var(--pagination-label-padding);
}

.bx-pagination_paged {
    display: flex;
}

.bx-pagination_btn {
    cursor: pointer;
}

.bx-pagination_btn,
.bx-pagination_move_label {
    background: transparent;
    border: none;
    padding: var(--pagination-button-padding);
    margin: 0px;
}

.bx-pagination_move {
    display: flex;
    align-items: center;
}

.bx-pagination_btn--disabled {
    opacity: 0.34;
}
`;

// src/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function PaginationButton({
  type,
  disabled,
  onChangeMove
}) {
  return /* @__PURE__ */ jsx("button", {
    disabled,
    onClick: () => onChangeMove && onChangeMove(type),
    className: `bx-pagination_btn ${disabled ? "bx-pagination_btn--disabled" : ""}`,
    children: type == ">>" ? /* @__PURE__ */ jsxs("svg", {
      width: "13",
      height: "15",
      viewBox: "0 0 13 15",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx("path", {
          d: "M5.22675 0.22471C4.92442 0.532422 4.92442 1.01828 5.22675 1.32599L11.1701 7.37495L5.2188 13.6911C4.92442 13.9988 4.93237 14.4928 5.24267 14.7843C5.55296 15.0758 6.03033 15.0758 6.31676 14.76L12.7852 7.9013C12.9284 7.74744 13 7.5531 13 7.35875C13 7.15631 12.9284 6.96197 12.7772 6.80811L6.3088 0.224711C6.00647 -0.0749024 5.52909 -0.0749025 5.22675 0.22471Z",
          fill: "var(--pagination-move-color)"
        }),
        /* @__PURE__ */ jsx("path", {
          d: "M0.99238 0.22471C0.690043 0.532422 0.690043 1.01828 0.99238 1.32599L6.93569 7.37495L0.984422 13.6911C0.690041 13.9988 0.697997 14.4928 1.00829 14.7843C1.31858 15.0758 1.79596 15.0758 2.08238 14.76L8.55081 7.9013C8.69402 7.74744 8.76563 7.5531 8.76563 7.35875C8.76563 7.15631 8.69402 6.96197 8.54285 6.80811L2.07443 0.224711C1.77209 -0.0749024 1.29472 -0.0749025 0.99238 0.22471Z",
          fill: "var(--pagination-move-color)"
        })
      ]
    }) : type == ">" ? /* @__PURE__ */ jsx("svg", {
      width: "9",
      height: "15",
      viewBox: "0 0 9 15",
      fill: "none",
      children: /* @__PURE__ */ jsx("path", {
        d: "M0.992378 0.224711C0.690041 0.532422 0.690041 1.01828 0.992378 1.32599L6.93569 7.37495L0.984422 13.6911C0.690041 13.9988 0.697997 14.4928 1.00829 14.7843C1.31858 15.0758 1.79596 15.0758 2.08238 14.76L8.55081 7.90129C8.69402 7.74744 8.76562 7.5531 8.76562 7.35875C8.76562 7.15631 8.69402 6.96197 8.54285 6.80811L2.07443 0.224711C1.77209 -0.074903 1.29472 -0.074903 0.992378 0.224711Z",
        fill: "var(--pagination-move-color)"
      })
    }) : type == "<" ? /* @__PURE__ */ jsx("svg", {
      width: "9",
      height: "15",
      viewBox: "0 0 9 15",
      fill: "none",
      children: /* @__PURE__ */ jsx("path", {
        d: "M8.53887 14.7753C8.84121 14.4676 8.84121 13.9817 8.53887 13.674L2.59556 7.62505L8.54683 1.30888C8.84121 1.00116 8.83325 0.507207 8.52296 0.215691C8.21267 -0.0758245 7.73529 -0.0758245 7.44887 0.239984L0.980444 7.0987C0.837231 7.25256 0.765625 7.4469 0.765625 7.64125C0.765625 7.84369 0.837231 8.03803 0.9884 8.19189L7.45682 14.7753C7.75916 15.0749 8.23653 15.0749 8.53887 14.7753Z",
        fill: "var(--pagination-move-color)"
      })
    }) : /* @__PURE__ */ jsxs("svg", {
      width: "13",
      height: "15",
      viewBox: "0 0 13 15",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx("path", {
          d: "M8.3045 14.7753C8.60683 14.4676 8.60683 13.9817 8.3045 13.674L2.36119 7.62505L8.31245 1.30888C8.60683 1.00116 8.59888 0.507207 8.28858 0.215691C7.97829 -0.0758245 7.50092 -0.0758245 7.21449 0.239984L0.746069 7.0987C0.602856 7.25256 0.53125 7.4469 0.53125 7.64125C0.53125 7.84369 0.602856 8.03803 0.754025 8.19189L7.22245 14.7753C7.52478 15.0749 8.00216 15.0749 8.3045 14.7753Z",
          fill: "var(--pagination-move-color)"
        }),
        /* @__PURE__ */ jsx("path", {
          d: "M12.5389 14.7753C12.8412 14.4676 12.8412 13.9817 12.5389 13.674L6.59556 7.62505L12.5468 1.30888C12.8412 1.00116 12.8333 0.507207 12.523 0.215691C12.2127 -0.0758245 11.7353 -0.0758245 11.4489 0.239984L4.98044 7.0987C4.83723 7.25256 4.76563 7.4469 4.76563 7.64125C4.76563 7.84369 4.83723 8.03803 4.9884 8.19189L11.4568 14.7753C11.7592 15.0749 12.2365 15.0749 12.5389 14.7753Z",
          fill: "var(--pagination-move-color)"
        })
      ]
    })
  });
}
function Pagination({
  pagesPerPage,
  pagedLabel,
  moveLabel,
  onChangePagesPerPage,
  onChangeMove,
  isMoveDisabled,
  value
}) {
  return /* @__PURE__ */ jsxs("div", {
    className: "bx-pagination",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "bx-pagination_paged",
        children: [
          /* @__PURE__ */ jsx("strong", {
            className: "bx-pagination_paged_label",
            children: pagedLabel
          }),
          /* @__PURE__ */ jsx(FieldSelect, {
            value: (value || pagesPerPage.at(0))?.toString(),
            onChange: onChangePagesPerPage,
            options: pagesPerPage.map((value2) => ({
              label: value2.toString(),
              value: value2.toString()
            }))
          })
        ]
      }),
      /* @__PURE__ */ jsxs("div", {
        className: "bx-pagination_move",
        children: [
          /* @__PURE__ */ jsx(PaginationButton, {
            onChangeMove,
            disabled: isMoveDisabled && isMoveDisabled("<<"),
            type: "<<"
          }),
          /* @__PURE__ */ jsx(PaginationButton, {
            onChangeMove,
            disabled: isMoveDisabled && isMoveDisabled("<"),
            type: "<"
          }),
          /* @__PURE__ */ jsx("strong", {
            className: "bx-pagination_move_label",
            children: moveLabel
          }),
          /* @__PURE__ */ jsx(PaginationButton, {
            onChangeMove,
            disabled: isMoveDisabled && isMoveDisabled(">"),
            type: ">"
          }),
          /* @__PURE__ */ jsx(PaginationButton, {
            onChangeMove,
            disabled: isMoveDisabled && isMoveDisabled(">>"),
            type: ">>"
          })
        ]
      })
    ]
  });
}
export {
  Pagination,
  PaginationButton
};
