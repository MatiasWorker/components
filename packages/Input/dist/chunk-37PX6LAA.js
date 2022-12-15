// src/Select.tsx
import { Down } from "@bxreact/icon";
import cs from "classnames";
import { useCallback, useState } from "react";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-form-input {
    display: flex;
    width: 100%;
    padding: 0 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bx-color-black);
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid var(--bx-color-lblue-well);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: var(--bx-input-sm-radius);
    height: var(--bx-input-sm-height);
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: var(--bx-input-sm-font-size);
    line-height: 1;
    box-sizing: border-box;
    font-family: var(--bx-font-secondary);
}

.bx-form--disabled {
    cursor: not-allowed;
    opacity: 0.75;
}

.bx-form-input-text {
    padding: 0px;
    line-height: 1;
}

.bx-form-input-container {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: var(--bx-input-sm-radius);
    height: var(--bx-input-sm-height);
    padding: 0 1rem;
    border: 1px solid var(--bx-color-lblue-well);
    font-weight: 400;
    line-height: 1.5;
    color: var(--bx-color-black);
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.bx-form-input-container-sm {
    height: 38px;
}

.bx-form-input-container-fill {
    background: white;
}

.bx-form-input-with-icon {
    border: none;
    appearance: none;
    background: transparent;
    display: flex;
    flex: 1;
    height: 100%;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bx-color-black);
    font-family: unset;
    min-width: 1px;
    font-size: 14px;
}

.bx-form-icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
}

.bx-form-select-container {
    position: relative;
    display: flex;
    width: 100%;
    padding: 0;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bx-color-black);
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid var(--bx-color-lblue-well);
    border-radius: var(--bx-input-sm-radius);
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.bx-form-select-container-md {
    height: var(--bx-input-sm-height);
}

.bx-form-select-container-sm {
    height: 40px;
}

.bx-form-select {
    display: flex;
    z-index: 2;
    width: 100%;
    padding: 0 2rem 0 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bx-color-black);
    background-color: transparent;
    border: none;
    box-shadow: none;
    background-image: none;
    height: 100%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: var(--bx-input-sm-radius);
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.bx-form-select-arrow {
    position: absolute;
    z-index: 1;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30px;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: var(--bx-color-black);
}

.bx-form-toggle-container {
    display: inline-flex;
    width: auto;
    align-items: center;
    justify-content: center;
    opacity: 1;
    padding: 3px 0;
    position: relative;
}

.bx-form-toggle-container-sm {
    --toggle-size: 1.25rem;
    --toggle-color: var(--bx-color-orange);
    --toggle-label: var(--bx-color-blue);
    --toggle-width: 1.67rem;
    --toggle-height: 0.835rem;
}

.bx-form-toggle-container-md {
    --toggle-size: 1.25rem;
    --toggle-color: var(--bx-color-orange);
    --toggle-label: var(--bx-color-blue);
    --toggle-width: 1.75rem;
    --toggle-height: 0.875rem;
}

.bx-form-toggle-container-lg {
    --toggle-size: 1.25rem;
    --toggle-color: var(--bx-color-orange);
    --toggle-label: var(--bx-color-blue);
    --toggle-width: 2rem;
    --toggle-height: 1rem;
}

.bx-form-toggle-input {
    opacity: 0;
    outline: none;
    position: absolute;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    z-index: -1;
    background-color: transparent;
}

.bx-form-toggle {
    border-radius: var(--bx-input-sm-radius);
    width: var(--toggle-width);
    height: var(--toggle-height);
    transition-delay: 0.12s;
    transition-duration: 0.2s;
    transition-property: background, border;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    background-color: var(--bx-color-blue-clear);
    border: 1px solid transparent;
    padding: 0;
    position: relative;
}

.bx-form-toggle-is-checked {
    background-color: var(--toggle-color);
}

.bx-form-toggle-inner {
    width: calc(var(--toggle-height) - 2px);
    height: calc(var(--toggle-height) - 2px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    transition: left 280ms cubic-bezier(0, 0, 0.2, 1);
    border-radius: 50%;
    background-color: #ffffff;
}

.bx-form-toggle-inner-is-checked {
    left: calc(100% - (var(--toggle-height) - 2px));
    box-shadow: none;
}

.bx-form-textarea-container {
    display: inline-flex;
    width: 100%;
    min-width: 12.5rem;
    max-width: 95vw;
    height: auto;
    border-radius: var(--bx-input-sm-radius);
    border: 1px solid var(--bx-color-lblue-well);
    color: var(--bx-color-black);
    transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    user-select: none;
}

.bx-form-textarea-container-focus {
    border: 1px solid var(--bx-color-blue-cross-2);
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba(56, 22, 98, 0.25);
}

.bx-form-textarea {
    background-color: transparent;
    box-shadow: none;
    display: block;
    font-size: 0.875rem;
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    padding: 8pt;
}

.bx-form-textarea:focus {
    outline: none;
}

.bx-form-checkbox-container-disabled,
.bx-form-toggle-container-disabled,
.bx-form-textarea-container-disabled {
    --checkbox-color: var(--bx-color-blue-shine);
    cursor: not-allowed;
    opacity: 0.75;
}

.bx-form-checkbox:disabled,
.bx-form-textarea:disabled,
.bx-form-checkbox[disabled],
.bx-form-textarea[disabled] {
    cursor: not-allowed;
}

.bx-form-input:focus {
    border: 1px solid var(--bx-color-blue-cross-2);
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba(56, 22, 98, 0.25);
}

.bx-form-input-fullwidth {
    width: 100%;
}

.bx-form-select-fullwidth {
    width: 100%;
}

.bx-form-input-with-icon:focus {
    outline: none;
}

.bx-form-select:focus {
    outline: none;
}

.bx-form-input:disabled,
.bx-form-input[disabled],
.bx-form-input[readonly],
.bx-form-input-with-icon:disabled,
.bx-form-input-with-icon[disabled],
.bx-form-input-with-icon[readonly] {
    opacity: 1;
    cursor: not-allowed;
    background-color: var(--bx-form-disabled);
}

.bx-form-select:disabled,
.bx-form-select[disabled],
.bx-form-select[readonly] {
    opacity: 1;
    cursor: not-allowed;
}

.bx-form-input-invalid {
    border: 1px solid var(--bx-fv-invalid);
}

.bx-form-input:focus.bx-form-input-invalid {
    border: 1px solid var(--bx-fv-invalid);
    box-shadow: 0 0 0 0.15rem var(--bx-fv-invalid-rgba) !important;
}

.bx-form-input-invalid svg {
    color: var(--bx-fv-invalid);
}

.bx-form-input-container-disabled {
    opacity: 1;
    cursor: not-allowed;
    background-color: var(--bx-form-disabled);
}

.bx-form-select-container-disabled {
    opacity: 1;
    cursor: not-allowed;
    background-color: var(--bx-form-disabled);
}

.bx-form-input-container-focus {
    border: 1px solid var(--bx-color-blue-cross-2);
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba(56, 22, 98, 0.25);
}

.bx-form-select-container-focus {
    border: 1px solid var(--bx-color-blue-cross-2);
    outline: none;
    box-shadow: 0 0 0 0.15rem rgba(56, 22, 98, 0.25);
}

.bx-form-text {
    margin-top: 0.25rem;
    color: var(--bx-form-text);
    font-size: 10px;
}

.bx-form-label {
    display: inline-block;
    margin-bottom: 0.813rem;
    font-size: 14px;
}

.bx-form-feedback {
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 10px;
}

.bx-form-feedback-valid {
    color: var(--bx-fv-valid);
}

.bx-form-feedback-invalid {
    color: var(--bx-fv-invalid);
}

.bx-form-feedback-is-active {
    display: block;
}

.bx-form-input.bx-form-input-button {
    align-items: center;
    gap: 1rem;
    z-index: 30;
    position: relative;
    white-space: nowrap;
}

.bx-form-input-button_label {
    text-align: left;
    flex: 0%;
}

.bx-form-input-type-select {
    padding: 0px;
    position: relative;
}

.bx-form-input-select {
    all: unset;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 1rem;
    z-index: 2;
    font-family: unset;
}

.bx-form-input-select_icon {
    right: 1rem;
    top: 50%;
    transform: translateY(-40%);
    position: absolute;
}
`;

// src/Select.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Select({
  placeholder,
  error,
  fullWidth,
  leftIcon,
  rightIcon,
  size,
  fill,
  options,
  disabled,
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
    className: cs("bx-form-input bx-form-input-type-select", {
      "bx-form-input-container-disabled": disabled,
      "bx-form-input-invalid": error,
      "bx-form-input-fullwidth": fullWidth,
      "bx-form-input-container-focus": focused,
      "bx-form-input-container-md": size === "md",
      "bx-form-input-container-sm": size === "sm",
      "bx-form-input-container-fill": fill
    }),
    children: [
      /* @__PURE__ */ jsxs("select", {
        className: "bx-form-input-select",
        onFocus: handleFocus,
        onBlur: handleBlur,
        disabled,
        ...props,
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
  });
}

export {
  Select
};