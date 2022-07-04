// src/index.tsx
import { createElement as _jsx } from "react";
import { useState, useRef, useEffect } from "react";

// src/index.css
import css from "ustyler";
var src_default = css`.field-text {
    --field-text-active-background: var(
        --bx-field-text-active-background,
        #f0f0f0
    );
    --field-text-min-height: var(--table-row-min-height, 48px);
    --field-text-padding: var(--table-field-padding, 10px);

    position: relative;
}

.field-text_input {
    width: 100%;
    padding: var(--field-text-padding);
    min-height: var(--field-text-min-height);
    box-sizing: border-box;
    border: none;
    background: transparent;
}

.field-text_input:not([disabled]) {
    background: var(--field-text-active-background);
}

.field-text_mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
`;

// src/index.tsx
function FieldText({ value, onChange }) {
  const [edit, setEdit] = useState();
  const handlerToggleEdit = () => setEdit(!edit);
  const refInput = useRef();
  useEffect(() => {
    if (edit && refInput.current) {
      refInput.current.focus();
    }
  }, [edit]);
  return /* @__PURE__ */ _jsx("div", {
    className: "field-text"
  }, /* @__PURE__ */ _jsx("input", {
    className: "field-text_input",
    onDoubleClick: handlerToggleEdit,
    disabled: !edit,
    value,
    ref: refInput,
    onInput: (event) => onChange && onChange(event.currentTarget.value)
  }), !edit && /* @__PURE__ */ _jsx("div", {
    className: "field-text_mask",
    onDoubleClick: handlerToggleEdit
  }));
}
export {
  FieldText
};
