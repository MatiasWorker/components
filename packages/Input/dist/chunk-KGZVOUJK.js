// src/select/select.tsx
import { Down } from "@bxreact/icon";
import cs from "classnames";
import {
  useCallback,
  useState,
  useEffect
} from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function Select({
  placeholder,
  error,
  fullWidth,
  leftIcon,
  rightIcon,
  size,
  options,
  disabled,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(!!props.value);
  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);
  useEffect(() => {
    setValue(!!props.value);
  }, [props.value]);
  return /* @__PURE__ */ jsxs("div", {
    className: cs("bx-form-input bx-form-input-type-select", {
      "bx-form-input-container-disabled": disabled,
      "bx-form-input-invalid": error,
      "bx-form-input-fullwidth": fullWidth,
      "bx-form-input-container-focus": focused,
      "bx-form-input-container-md": size === "md",
      "bx-form-input-container-sm": size === "sm"
    }),
    children: [
      /* @__PURE__ */ jsxs("select", {
        ...props,
        className: `bx-form-input-select ${value ? "bx-form-input-select--with-value" : ""}`,
        onFocus: handleFocus,
        onBlur: handleBlur,
        disabled,
        onChange: (event) => {
          setValue(true);
          props?.onChange(event);
        },
        children: [
          placeholder && /* @__PURE__ */ jsx("option", {
            value: "",
            disabled: true,
            selected: !value,
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
  });
}

export {
  Select
};
