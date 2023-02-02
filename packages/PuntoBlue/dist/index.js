import {
  PuntoBlueItem,
  Week,
  getHumanSchedule
} from "./chunk-T4MSN55S.js";

// src/index.tsx
import { Card } from "@bxreact/card";
import { Grid } from "@bxreact/grid";
import * as Icon from "@bxreact/icon";

// ../Label/dist/index.js
import "@bxreact/theme";
import css from "@bxreact/theme/css";
import { jsx, jsxs } from "react/jsx-runtime";
var src_default = css`.bx-label {
    --color-detail: currentColor;
}

.bx-label_row {
    --gap: 0.25rem;
    width: 100%;
    display: flex;
    gap: var(--gap);
    flex-flow: column;
    font-size: var(--bx-font-size-text-2);
}

.bx-label_required {
    color: var(--bx-color-red-alert);
    font-size: 1.2em;
    font-weight: bold;
    line-height: 0;
    margin-left: 0.1em;
    position: relative;
    top: 0.1em;
}

.bx-label_row--horizontal {
    flex-flow: row;
    align-items: center;
    --gap: 1rem;
}

.bx-label--center {
    display: flex;
    justify-content: center;
}

.bx-label_row--reverse {
    flex-flow: column-reverse;
}

.bx-label_row--reverse.bx-label--horizontal {
    flex-flow: row-reverse;
}

.bx-label_detail {
    font-size: var(--bx-font-size-text-3);
    color: var(--color-detail);
}

.bx-label_detail small {
    font-size: var(--bx-font-size-text-4);
}

.bx-label--status-danger {
    --color-detail: var(--bx-color-danger);
}

.bx-label--status-success {
    --color-detail: var(--bx-color-success);
}

.bx-label--status-info {
    --color-detail: var(--bx-color-info);
}

.bx-label--status-warning {
    --color-detail: var(--bx-color-warning);
}`;
function Label({
  title,
  reverse,
  children,
  detail,
  required,
  description,
  layout,
  icon,
  status
}) {
  const classNameCenter = layout === "center" ? "bx-label--center" : "";
  return /* @__PURE__ */ jsx("label", {
    className: `bx-label bx-label--status-${status}`,
    children: /* @__PURE__ */ jsxs("div", {
      className: "bx-label_row bx-label_row--horizontal",
      children: [
        !!icon && /* @__PURE__ */ jsx("div", {
          className: "bx-label_icon",
          children: icon
        }),
        /* @__PURE__ */ jsxs("div", {
          className: `bx-label_row ${reverse ? "bx-label_row--reverse" : ""} ${layout ? `bx-label_row--${layout}` : ""} `,
          children: [
            !!title && /* @__PURE__ */ jsxs("div", {
              className: `bx-label_title ${classNameCenter}`,
              children: [
                title,
                required && /* @__PURE__ */ jsx("span", {
                  className: "bx-label_required",
                  children: "*"
                })
              ]
            }),
            !!description && /* @__PURE__ */ jsx("div", {
              className: `bx-label_detail ${classNameCenter}`,
              children: description
            }),
            !!children && /* @__PURE__ */ jsx("div", {
              className: `bx-label_content ${classNameCenter}`,
              children
            }),
            !!detail && /* @__PURE__ */ jsx("div", {
              className: `bx-label_detail ${classNameCenter}`,
              children: detail
            })
          ]
        })
      ]
    })
  });
}

// src/index.css
import css2 from "@bxreact/theme/css";
var src_default2 = css2`.bx-punto-blue_alert {
    font-size: var(--bx-font-size-text-2);
}

.bx-punto-blue_hr {
    margin: 0px;
    height: 2px;
    background: var(--bx-color-orange);
    border: none;
}
`;

// src/index.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function PuntoBlueList({
  value,
  options,
  labelAlertUnselect = /* @__PURE__ */ jsxs2(Fragment, {
    children: [
      "Selecciona la ",
      /* @__PURE__ */ jsx2("b", {
        children: "regi\xF3n y comuna"
      }),
      " para ver los Puntos Blue Express"
    ]
  }),
  labelTitle = /* @__PURE__ */ jsx2(Fragment, {
    children: "Selecciona el Punto Blue Express"
  }),
  labelDescription = /* @__PURE__ */ jsxs2(Fragment, {
    children: [
      options.length,
      " Puntos Blue Express"
    ]
  }),
  onChange
}) {
  return /* @__PURE__ */ jsxs2(Grid, {
    children: [
      /* @__PURE__ */ jsx2(Label, {
        title: /* @__PURE__ */ jsx2("h4", {
          children: labelTitle
        }),
        detail: /* @__PURE__ */ jsx2("hr", {
          className: "bx-punto-blue_hr"
        }),
        children: /* @__PURE__ */ jsx2("div", {
          children: labelDescription
        })
      }),
      /* @__PURE__ */ jsx2(Grid, {
        gap: "1rem",
        children: options.length ? options.map(
          ({ open_hours, agency_name, location, agency_id }, i) => /* @__PURE__ */ jsx2(PuntoBlueItem, {
            title: agency_name,
            schedule: open_hours,
            address: `${location.street_name} ${location.street_number}`,
            status: "Abierto",
            checked: agency_id === value,
            value: agency_id,
            onChange
          })
        ) : /* @__PURE__ */ jsx2(Card, {
          theme: "warning",
          padding: "sm",
          className: "bx-punto-blue_alert",
          radius: "xs",
          children: /* @__PURE__ */ jsx2(Label, {
            icon: /* @__PURE__ */ jsx2(Icon.Warning, {
              size: "2rem",
              color: "orange"
            }),
            children: labelAlertUnselect
          })
        })
      })
    ]
  });
}
export {
  PuntoBlueItem,
  PuntoBlueList,
  Week,
  getHumanSchedule
};
