import { InputUnknown } from "./types";

type Form = {
    [prop: string]: InputUnknown | InputUnknown[];
};

type Data = {
    [prop: string]: any;
};

export const isInputs = (value: any): value is InputUnknown[] =>
    Array.isArray(value);

export const isBoolean = (value: any): value is boolean =>
    typeof value === "boolean";

/**
 * Verifica el estado de requerido de todos los campos del formulario
 */
export const required = (form: Form, data: { [prop: string]: any }) =>
    Object.entries(logic(form, data))
        .filter(([, input]) => input.required)
        .every(([prop, input]) => {
            if (inputIsRequired(input, data)) {
                if (
                    input.type === "text" ||
                    input.type === "textarea" ||
                    typeof data[prop] === "string"
                ) {
                    return !!data[prop].trim();
                } else {
                    return data[prop] != null;
                }
            }
        });

/**
 * Permite retornar los inputs segun la data dada.
 */
export const logic = (form: Form, data: Data) => {
    const viewForm: {
        [prop: string]: InputUnknown;
    } = {};
    // revisa si la vista actual debe ser enseñáda
    Object.entries(form).forEach(function filter([prop, value]: [
        string,
        InputUnknown | InputUnknown[]
    ]) {
        if (isInputs(value)) {
            value.map((value) => filter([prop, value]));
        } else if (value.logic) {
            const logic = [value.logic].flat();
            const nextValue = logic.find((value) =>
                Object.entries(value).every(([prop, value]) => {
                    return Array.isArray(value)
                        ? value.includes(data[prop])
                        : data[prop] === value;
                })
            );
            if (nextValue && !viewForm[prop])
                viewForm[prop] = value as InputUnknown;
        } else {
            viewForm[prop] = value;
        }
    });

    return viewForm;
};

export const inputIsRequired = (input: InputUnknown, data: Data) => {
    if (input.required) {
        if (isBoolean(input.required)) return true;
        return Object.entries(input.required).some(
            ([prop, value]) => data[prop] === value
        );
    }
};
