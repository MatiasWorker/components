// src/item/item.tsx
import { Card } from "@bxreact/card";
import * as Icon from "@bxreact/icon";

// src/item/item.css
import css from "@bxreact/theme/css";
var item_default = css`.bx-punto-blue-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    --gap: var(--bx-space-xxs);
    gap: var(--bx-space-xs);
}

.bx-punto-blue-item_title {
    font-size: var(--bx-font-size-text-2);
}

.bx-punto-blue-item_address {
    font-size: var(--bx-font-size-text-3);
    display: flex;
    align-items: center;
    gap: var(--gap);
}

.bx-punto-blue-item_status {
    font-size: var(--bx-font-size-text-2);
}

.bx-punto-blue-item_schedule {
    font-size: var(--bx-font-size-text-3);
}

.bx-punto-blue-item_date {
    text-transform: capitalize;
    white-space: nowrap;
}

.bx-punto-blue-item_right {
    text-align: right;
}

.bx-punto-blue-item_left,
.bx-punto-blue-item_right {
    display: grid;
    gap: var(--gap);
}

.bx-punto-blue-item_label {
    cursor: pointer;
}

.bx-punto-blue-item_checkbox {
    display: none;
}

@media (max-width: 320px) {
    .bx-punto-blue-item {
        display: grid;
    }

    .bx-punto-blue-item_right {
        text-align: left;
    }
}
`;

// src/item/item.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Week = {
  monday: "lun",
  tuesday: "mar",
  wednesday: "mir",
  thursday: "jue",
  friday: "vie",
  saturday: "sab",
  holidays: "festivos"
};
function getHumanSchedule(data) {
  const list = Object.entries(data).reduce((groups, [id, config]) => {
    config.map((item) => {
      const did = item.from + " - " + item.to;
      groups[did] = groups[did] || [];
      groups[did].push(id);
    });
    return groups;
  }, {});
  return Object.entries(list).map(
    ([id, week]) => Week[week.at(0)] + (week.length > 1 ? " - " + Week[week.at(-1)] : "") + " " + id
  );
}
function PuntoBlueItem({
  title,
  status,
  schedule,
  address,
  checked,
  value,
  onChange
}) {
  const props = {
    bgColor: checked ? "blue" : "grey-up",
    color: checked ? "white" : "unset"
  };
  return /* @__PURE__ */ jsxs("label", {
    className: "bx-punto-blue-item_label",
    children: [
      /* @__PURE__ */ jsx("input", {
        type: "checkbox",
        className: "bx-punto-blue-item_checkbox",
        checked,
        value,
        onChange: () => {
          onChange && onChange(value);
        }
      }),
      /* @__PURE__ */ jsxs(Card, {
        ...props,
        className: "bx-punto-blue-item",
        padding: "md sm",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "bx-punto-blue-item_left",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "bx-punto-blue-item_title",
                children: /* @__PURE__ */ jsx("b", {
                  children: title
                })
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "bx-punto-blue-item_address",
                children: [
                  /* @__PURE__ */ jsx(Icon.Place, {
                    size: "1.25rem",
                    color: checked ? "white" : "blue"
                  }),
                  /* @__PURE__ */ jsx("span", {
                    children: address
                  })
                ]
              })
            ]
          }),
          schedule && /* @__PURE__ */ jsxs("div", {
            className: "bx-punto-blue-item_right",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "bx-punto-blue-item_status",
                children: status
              }),
              /* @__PURE__ */ jsx("div", {
                className: "bx-punto-blue-item_schedule",
                children: getHumanSchedule(schedule).map((value2) => /* @__PURE__ */ jsx("div", {
                  className: "bx-punto-blue-item_date",
                  children: value2
                }))
              })
            ]
          })
        ]
      })
    ]
  });
}

export {
  Week,
  getHumanSchedule,
  PuntoBlueItem
};
