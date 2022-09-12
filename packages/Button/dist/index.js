// src/index.tsx
import { createElement as _jsx } from "react";

// src/index.css
import css from "ustyler";
var src_default = css`.button {
    --button-padding: var(--bx-input-sm-padding);
    --button-height: var(--bx-input-sm-height);
    --button-radius: var(--bx-input-sm-radius);
    --button-bgcolor: var(--bx-button-filled-bgcolor);
    --button-color: var(--bx-button-filled-color);
    --button-font-size: var(--bx-input-sm-font-size);
    --button-border-color: transparent;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--button-padding);
    min-height: var(--button-height);
    box-sizing: border-box;
    flex-flow: row nowrap;
    border-radius: var(--button-radius);
    font-family: var(--bx-input-font-family);
    font-weight: var(--bx-input-font-weight);
    border: none;
    background: var(--button-bgcolor);
    color: var(--button-color);
    font-size: var(--button-font-size);
    line-height: 1;
    text-decoration: none;
    gap: var(--bx-button-gap);
    pointer-events: none;
    border: var(--bx-button-border) var(--button-border-color);
    transition: var(--bx-input-transition);
    white-space: nowrap;
}

.button--wrap {
    white-space: normal;
}

.button:not(.button--thead):hover {
    --button-bgcolor: var(--bx-button-filled-hover-bgcolor);
    --button-color: var(--bx-button-filled-hover-color);
}

.button--outline:not(:hover) {
    --button-border-color: var(--button-bgcolor);
    --button-color: var(--button-bgcolor) !important;
    background: transparent;
}

.button--xs {
    --button-padding: var(--bx-input-xs-padding);
    --button-height: var(--bx-input-xs-height);
    --button-radius: var(--bx-input-xs-radius);
    --button-font-size: var(--bx-input-xs-font-size);
}

.button--md {
    --button-padding: var(--bx-input-md-padding);
    --button-height: var(--bx-input-md-height);
    --button-radius: var(--bx-input-md-radius);
    --button-font-size: var(--bx-input-md-font-size);
}

.button--lg {
    --button-padding: var(--bx-input-lg-padding);
    --button-height: var(--bx-input-lg-height);
    --button-radius: var(--bx-input-lg-radius);
    --button-font-size: var(--bx-input-lg-font-size);
}

.button:disabled,
.button[disabled] {
    pointer-events: none;
    --button-bgcolor: var(--bx-button-filled-disabled-bgcolor);
    --button-color: var(--bx-button-filled-disabled-color);
}

.button--thead {
    --button-bgcolor: var(--bx-button-thead-bgcolor);
    --button-color: var(--bx-button-thead-color);
    --button-radius: 0.75rem;
    box-shadow: var(--bx-button-shadow);
}

.button--thead.button--status-info {
    --button-bgcolor: var(--bx-button-thead-info-bgcolor);
    --button-color: var(--bx-button-thead-info-color);
}

.button--thead.button--status-success {
    --button-bgcolor: var(--bx-button-thead-success-bgcolor);
    --button-color: var(--bx-button-thead-success-color);
}

.button--thead.button--status-warning {
    --button-bgcolor: var(--bx-button-thead-warning-bgcolor);
    --button-color: var(--bx-button-thead-warning-color);
}

.button--thead.button--status-danger {
    --button-bgcolor: var(--bx-button-thead-danger-bgcolor);
    --button-color: var(--bx-button-thead-danger-color);
}

.button--thead:disabled,
.button--thead[disabled] {
    --button-bgcolor: var(--bx-button-thead-disabled-bgcolor);
    --button-color: var(--bx-button-thead-disabled-color);
}

.button--icon {
    width: var(--button-height);
    height: var(--button-height);
    padding: 0px;
}

.button.button--badge {
    --button-height: 1.5rem;
    --button-radius: 0.5rem;
    --button-font-size: 0.75rem;
    --button-padding: 0px 0.75rem;
}

.button.button--pointer {
    pointer-events: all;
    cursor: pointer;
}
`;

// src/index.tsx
function Button({
  onClick,
  disabled,
  href,
  open,
  children,
  size,
  thead,
  status,
  icon,
  wrap,
  badge,
  color,
  bgcolor,
  outline
}) {
  const Type = href ? "a" : "button";
  const className = ["button"];
  const style = {};
  if (size)
    className.push(`button--${size}`);
  if (thead)
    className.push(`button--thead`);
  if (status)
    className.push(`button--status-${status}`);
  if (icon)
    className.push(`button--icon`);
  if (badge)
    className.push(`button--badge`);
  if (outline)
    className.push(`button--outline`);
  if (wrap)
    className.push(`button--wrap`);
  if ((onClick || href) && !disabled)
    className.push(`button--pointer`);
  if (color) {
    style["--button-color"] = `var(--bx-color-${color}, var(--bx-button-filled-color))`;
  }
  if (bgcolor) {
    style["--button-bgcolor"] = `var(--bx-color-${bgcolor}, var(--bx-button-filled-bgcolor))`;
  }
  return /* @__PURE__ */ _jsx(Type, {
    className: className.join(" "),
    onClick,
    href,
    target: open ? "_blank" : null,
    disabled,
    style
  }, children);
}
export {
  Button
};
