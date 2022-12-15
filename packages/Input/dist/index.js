import {
  Select
} from "./chunk-37PX6LAA.js";
import {
  Checkbox
} from "./chunk-OMROR67P.js";
import {
  Radio
} from "./chunk-Q2KW6XU5.js";
import {
  Textarea
} from "./chunk-XLQPOQKM.js";

// src/index.tsx
import { useState, useCallback } from "react";
import cs from "classnames";
import { Down } from "@bxreact/icon";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function Input({
  type,
  value,
  onChange,
  id,
  readOnly,
  disabled,
  placeholder,
  required,
  form,
  name,
  error,
  fullWidth,
  leftIcon,
  rightIcon,
  inputSize,
  fill,
  options,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: cs("bx-form-input", {
      "bx-form-input-container-disabled": disabled,
      "bx-form-input-invalid": error,
      "bx-form-input-fullwidth": fullWidth,
      "bx-form-input-container-focus": focused,
      "bx-form-input-container-md": inputSize === "md",
      "bx-form-input-container-sm": inputSize === "sm",
      "bx-form-input-container-fill": fill,
      "bx-form-input-type-select": type === "select"
    }),
    children: [
      leftIcon && /* @__PURE__ */ jsx("div", {
        className: "bx-form-icon-container bx-form-icon-left",
        children: leftIcon
      }),
      type === "select" ? /* @__PURE__ */ jsxs(Fragment, {
        children: [
          /* @__PURE__ */ jsxs("select", {
            className: "bx-form-input-select",
            name,
            value: value || "",
            onChange,
            children: [
              placeholder && /* @__PURE__ */ jsx("option", {
                value: "",
                disabled: true,
                children: placeholder
              }, "placeholder"),
              options.map((option, i) => /* @__PURE__ */ jsx("option", {
                value: option.value,
                children: option.label
              }, i))
            ]
          }),
          /* @__PURE__ */ jsx("div", {
            className: "bx-form-input-select_icon",
            children: /* @__PURE__ */ jsx(Down, {
              size: "1em",
              color: "lblue-well"
            })
          })
        ]
      }) : /* @__PURE__ */ jsx("input", {
        className: cs(
          "bx-form-input-text bx-form-input-with-icon",
          {
            "bx-form-input-fullwidth": fullWidth
          }
        ),
        type,
        value,
        onChange,
        id,
        disabled,
        readOnly,
        placeholder,
        required,
        form,
        name,
        onFocus: handleFocus,
        onBlur: handleBlur,
        ...props
      }),
      rightIcon && /* @__PURE__ */ jsx("div", {
        className: "bx-form-icon-container bx-form-icon-right",
        children: rightIcon
      })
    ]
  });
}
export {
  Checkbox,
  Input,
  Radio,
  Select,
  Textarea
};
