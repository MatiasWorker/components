// src/textarea/textarea.tsx
import { useState, useCallback } from "react";
import cs from "classnames";
import { jsx } from "react/jsx-runtime";
function Textarea({
  error,
  disabled,
  form,
  reference,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);
  const handleBlur = useCallback(() => {
    setFocused(false);
  }, []);
  return /* @__PURE__ */ jsx("div", {
    className: cs("bx-form-textarea-container", {
      "bx-form-textarea-container-disabled": disabled,
      "bx-form-textarea-container-error": error,
      "bx-form-textarea-container-focus": focused
    }),
    children: /* @__PURE__ */ jsx("textarea", {
      ...props,
      className: "bx-form-textarea",
      disabled,
      onFocus: handleFocus,
      onBlur: handleBlur,
      ref: reference,
      onChange: (event) => props?.onChange(event)
    })
  });
}

export {
  Textarea
};
