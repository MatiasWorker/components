// src/index.tsx
import {
  Checkbox,
  Input,
  Select,
  Switch,
  Textarea,
  File
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
var isInput = (value) => !Array.isArray(value);
var isBoolean = (value) => typeof value === "boolean";
function Form({
  formData,
  metaData,
  form,
  onChange,
  columns
}) {
  const data = { ...formData, ...metaData };
  const viewForm = {};
  Object.entries(form).forEach(function filter([prop, value]) {
    if (isInput(value) && value.logic) {
      const logic = [value.logic].flat();
      const nextValue = logic.find(
        (value2) => Object.entries(value2).every(([prop2, value3]) => {
          return Array.isArray(value3) ? value3.includes(data[prop2]) : data[prop2] === value3;
        })
      );
      if (nextValue && !viewForm[prop])
        viewForm[prop] = value;
    } else {
      if (Array.isArray(value)) {
        value.map((value2) => filter([prop, value2]));
      } else {
        viewForm[prop] = value;
      }
    }
  });
  const isRequired = (input) => {
    if (input.required) {
      if (isBoolean(input.required))
        return true;
      return Object.entries(input.required).some(
        ([prop, value]) => data[prop] === value
      );
    }
  };
  return /* @__PURE__ */ jsx("div", {
    className: "bx-form",
    style: columns ? {
      "--columns": `${"1fr ".repeat(columns)}`
    } : null,
    children: Object.entries(viewForm).reduce((cols, [prop, input]) => {
      const id = input?.config?.column || 1;
      cols[id] = cols[id] || [];
      cols[id].push([prop, input]);
      return cols;
    }, []).map((col) => /* @__PURE__ */ jsx("div", {
      className: "bx-form_column",
      children: col.map(([prop, input]) => {
        const value = data[prop];
        const set = (value2) => onChange({
          ...data,
          [prop]: value2
        });
        const required = isRequired(input);
        return /* @__PURE__ */ jsx(InputCase, {
          input,
          data,
          value,
          set,
          required
        });
      })
    }))
  });
}
function InputCase({
  input,
  required,
  data,
  value,
  set
}) {
  switch (input.type) {
    case "custom":
      return input?.render(data, value);
    case "checkbox":
    case "switch":
      return /* @__PURE__ */ jsx(Label, {
        required,
        icon: input.type === "checkbox" ? /* @__PURE__ */ jsx(Checkbox, {
          checked: !!value,
          onChange: ({ target }) => set(target.checked)
        }) : /* @__PURE__ */ jsx(Switch, {
          checked: !!value,
          onChange: (checked) => set(checked)
        }),
        title: input.label,
        detail: input.detail,
        description: input.description,
        status: input.status
      });
    case "text":
    case "number":
    case "email":
    case "date":
      return /* @__PURE__ */ jsx(Label, {
        required,
        title: input.label,
        detail: input.detail,
        description: input.description,
        status: input.status,
        children: /* @__PURE__ */ jsx(Input, {
          type: input.type,
          status: input.status,
          placeholder: input.placeholder,
          value: value || input.value,
          onChange: ({ target }) => set(
            input.type === "number" ? target.valueAsNumber : input.type === "date" ? target.valueAsDate : target.value
          )
        })
      });
    case "textarea":
      return /* @__PURE__ */ jsx(Label, {
        required,
        title: input.label,
        detail: input.detail,
        description: input.description,
        status: input.status,
        children: /* @__PURE__ */ jsx(Textarea, {
          placeholder: input.placeholder,
          value: value || input.value,
          onChange: ({ target }) => set(target.value)
        })
      });
    case "file":
      return /* @__PURE__ */ jsx(Label, {
        required,
        title: input.label,
        detail: input.detail,
        description: input.description,
        status: input.status,
        children: /* @__PURE__ */ jsx(File, {
          onChange: ({ target }) => set(target.value)
        })
      });
    case "select":
      return /* @__PURE__ */ jsx(Label, {
        required,
        title: input.label,
        detail: input.detail,
        description: input.description,
        status: input.status,
        children: /* @__PURE__ */ jsx(Select, {
          placeholder: input.placeholder,
          value,
          options: input.options,
          onChange: ({ target }) => set(target.value)
        })
      });
  }
}
export {
  Form
};
