// src/utils.ts
var isInputs = (value) => Array.isArray(value);
var isBoolean = (value) => typeof value === "boolean";
var required = (form, data) => Object.entries(logic(form, data)).filter(([, input]) => input.required).every(([prop, input]) => {
  if (inputIsRequired(input, data)) {
    if (input.type === "text" || input.type === "textarea" || typeof data[prop] === "string") {
      return !data[prop].trim();
    } else {
      return data[prop] == null;
    }
  }
});
var logic = (form, data) => {
  const viewForm = {};
  Object.entries(form).forEach(function filter([prop, value]) {
    if (isInputs(value)) {
      value.map((value2) => filter([prop, value2]));
    } else if (value.logic) {
      const logic2 = [value.logic].flat();
      const nextValue = logic2.find(
        (value2) => Object.entries(value2).every(([prop2, value3]) => {
          return Array.isArray(value3) ? value3.includes(data[prop2]) : data[prop2] === value3;
        })
      );
      if (nextValue && !viewForm[prop])
        viewForm[prop] = value;
    } else {
      viewForm[prop] = value;
    }
  });
  return viewForm;
};
var inputIsRequired = (input, data) => {
  if (input.required) {
    if (isBoolean(input.required))
      return true;
    return Object.entries(input.required).some(
      ([prop, value]) => data[prop] === value
    );
  }
};

export {
  isInputs,
  isBoolean,
  required,
  logic,
  inputIsRequired
};
