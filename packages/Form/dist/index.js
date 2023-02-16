import "./chunk-6F4PWJZI.js";
import {
  inputIsRequired,
  logic,
  required
} from "./chunk-ZYEQF7MK.js";

// src/index.tsx
import {
  Checkbox,
  File,
  Input,
  Select,
  Switch,
  Textarea
} from "@bxreact/input";
import { Label } from "@bxreact/label";

// src/index.css
import css from "@bxreact/theme/css";
var src_default = css`.bx-form {
    display: grid;
    gap: var(--bx-space-lg);
    grid-template-columns: var(--columns, 1fr);
}

.bx-form_column {
    display: grid;
    gap: var(--bx-space-md);
    align-content: start;
}

@media (max-width: 420px) {
    .bx-form {
        --columns: 1fr !important;
    }
}
`;

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function Form({
  formData,
  metaData,
  form,
  onChange,
  columns,
  types
}) {
  const data = { ...formData, ...metaData };
  const viewForm = logic(form, data);
  return /* @__PURE__ */ jsx("div", {
    className: "bx-form",
    style: columns ? {
      "--columns": `${"1fr ".repeat(columns)}`
    } : null,
    children: Object.entries(viewForm).reduce((inputs, [prop, input]) => {
      if (types?.[prop]) {
        const next = types[prop](
          input,
          data,
          data[prop]
        );
        if (typeof next?.type === "string") {
          inputs.push([prop, next]);
        } else {
          inputs.push(...Object.entries(next));
        }
      } else {
        inputs.push([prop, input]);
      }
      return inputs;
    }, []).reduce((cols, [prop, input], tabIndex) => {
      const id = input?.column || 1;
      cols[id] = cols[id] || [];
      cols[id].push([prop, { ...input, tabIndex: tabIndex + 1 }]);
      return cols;
    }, []).map((col, i) => /* @__PURE__ */ jsx("div", {
      className: "bx-form_column",
      children: col.map(([prop, input]) => {
        const value = data[prop];
        const set = (value2) => onChange({
          ...data,
          [prop]: value2
        });
        const setAll = (nextData) => onChange({ ...data, ...nextData });
        return /* @__PURE__ */ jsx(InputCase, {
          input,
          data,
          value,
          set,
          setAll,
          name: prop,
          required: inputIsRequired(input, data)
        }, prop);
      })
    }, i))
  });
}
function InputCase({
  input,
  required: required2,
  data,
  value,
  set,
  setAll,
  name
}) {
  const {
    type,
    label,
    detail,
    description,
    status,
    value: inputValue,
    required: ignoreRequired,
    column: ignoreConfig,
    show: ignoreShow,
    disabled: ignoreDisabled,
    loading,
    render,
    options: ignoreOptions,
    ...unknownProps
  } = input;
  const currentValue = value ?? inputValue;
  if (loading)
    return /* @__PURE__ */ jsx(Input, {
      loading: true,
      disabled: true
    });
  switch (type) {
    case "custom":
      return render && render(data, value, name, setAll);
    case "checkbox":
    case "switch":
      return /* @__PURE__ */ jsx(Label, {
        required: required2,
        icon: type === "checkbox" ? /* @__PURE__ */ jsx(Checkbox, {
          ...unknownProps,
          checked: !!value,
          onChange: ({ target }) => set(target.checked)
        }) : /* @__PURE__ */ jsx(Switch, {
          ...unknownProps,
          checked: !!value,
          onChange: (checked) => set(checked)
        }),
        title: label,
        detail,
        description,
        status
      });
    case "text":
    case "number":
    case "email":
    case "date":
      return /* @__PURE__ */ jsx(Label, {
        required: required2,
        title: label,
        detail,
        description,
        status,
        children: /* @__PURE__ */ jsx(Input, {
          ...unknownProps,
          required: required2,
          type,
          status,
          placeholder: input.placeholder,
          value: currentValue,
          onChange: ({ target }) => set(
            type === "number" ? target.valueAsNumber : type === "date" ? target.valueAsDate : target.value
          )
        })
      });
    case "textarea":
      return /* @__PURE__ */ jsx(Label, {
        required: required2,
        title: label,
        detail,
        description,
        status,
        children: /* @__PURE__ */ jsx(Textarea, {
          ...unknownProps,
          required: required2,
          placeholder: input.placeholder,
          value: currentValue,
          onChange: ({ target }) => set(target.value)
        })
      });
    case "file":
      return /* @__PURE__ */ jsx(Label, {
        required: required2,
        title: label,
        detail,
        description,
        status,
        children: /* @__PURE__ */ jsx(File, {
          ...unknownProps,
          required: required2,
          onChange: (files) => set(files)
        })
      });
    case "select":
      return /* @__PURE__ */ jsx(Label, {
        required: required2,
        title: label,
        detail,
        description,
        status,
        children: /* @__PURE__ */ jsx(Select, {
          ...unknownProps,
          required: required2,
          placeholder: input.placeholder,
          value,
          options: input.options,
          onChange: ({ target }) => set(target.value)
        })
      });
  }
}
export {
  Form,
  logic,
  required
};
