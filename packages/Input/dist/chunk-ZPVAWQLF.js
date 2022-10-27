// src/Textarea.tsx
import { useState, useCallback } from "react";
import cs from "classnames";
import { jsx } from "react/jsx-runtime";
function Textarea({
  value,
  onChange,
  id,
  error,
  disabled,
  placeholder,
  form,
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
    className: cs("form-textarea-container", {
      "form-textarea-container-disabled": disabled,
      "form-textarea-container-error": error,
      "form-textarea-container-focus": focused
    }),
    children: /* @__PURE__ */ jsx("textarea", {
      className: "form-textarea",
      value,
      onChange,
      id,
      disabled,
      onFocus: handleFocus,
      onBlur: handleBlur,
      placeholder,
      form,
      ...props
    })
  });
}

export {
  Textarea
};
