import { Checkbox, Input, Select, Switch, Textarea } from "@bxreact/input";
import { Label } from "@bxreact/label";
import { CSSProperties } from "react";
import "./index.css";
import { InputData, InputForm, InputUnknown } from "./types";
export { InputForm } from "./types";

export interface Props<FormData extends InputData, MetaData extends InputData> {
    formData: FormData;
    metaData?: MetaData;
    form: InputForm<FormData, MetaData>;
    columns?: number;
    onChange: (data: FormData) => void;
}

const isInput = (value: any): value is InputUnknown => !Array.isArray(value);

const isBoolean = (value: any): value is boolean => typeof value === "boolean";

export function Form<
    FormData extends InputData,
    MetaFormData extends InputData
>({
    formData,
    metaData,
    form,
    onChange,
    columns,
}: Props<FormData, MetaFormData>): JSX.Element {
    const data = { ...formData, ...metaData };
    const viewForm: InputForm<any, any> = {};

    // revisa si la vista actual debe ser enseñáda
    Object.entries(form).forEach(function filter([prop, value]: [
        string,
        InputUnknown | InputUnknown[]
    ]) {
        if (isInput(value) && value.logic) {
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
            if (Array.isArray(value)) {
                value.map((value) => filter([prop, value]));
            } else {
                viewForm[prop] = value;
            }
        }
    });

    // revisa si la si la propiedad actual es un campo requerido
    const isRequired = (input: InputUnknown) => {
        if (input.required) {
            if (isBoolean(input.required)) return true;
            return Object.entries(input.required).some(
                ([prop, value]) => data[prop] === value
            );
        }
    };

    return (
        <div
            className="bx-form"
            style={
                columns
                    ? ({
                          "--columns": `${"1fr ".repeat(columns)}`,
                      } as CSSProperties)
                    : null
            }
        >
            {Object.entries(viewForm)
                .reduce((cols, [prop, input]: [string, InputUnknown]) => {
                    const id = input?.config?.column || 1;

                    cols[id] = cols[id] || [];
                    cols[id].push([prop, input]);

                    return cols;
                }, [])
                .map((col) => (
                    <div className="bx-form_column">
                        {col.map(([prop, input]: [string, InputUnknown]) => {
                            const value = data[prop];
                            const set = (value) =>
                                onChange({
                                    ...data,
                                    [prop]: value,
                                });

                            const required = isRequired(input);

                            return (
                                <InputCase
                                    input={input}
                                    data={data}
                                    value={value}
                                    set={set}
                                    required={required}
                                ></InputCase>
                            );
                        })}
                    </div>
                ))}
        </div>
    );
}

function InputCase({
    input,
    required,
    data,
    value,
    set,
}: {
    input: InputUnknown;
    data: InputData;
    value: any;
    required: boolean;
    set(nextValue: any): void;
}) {
    switch (input.type) {
        case "custom":
            return input?.render(data, value);
        case "checkbox":
        case "switch":
            return (
                <Label
                    required={required}
                    icon={
                        input.type === "checkbox" ? (
                            <Checkbox
                                checked={!!value}
                                onChange={({ target }) => set(target.checked)}
                            />
                        ) : (
                            <Switch
                                checked={!!value}
                                onChange={(checked) => set(checked)}
                            />
                        )
                    }
                    title={input.label}
                    detail={input.detail}
                ></Label>
            );
        case "text":
        case "number":
        case "date":
            return (
                <Label
                    required={required}
                    title={input.label}
                    detail={input.detail}
                >
                    <Input
                        placeholder={input.placeholder}
                        type={input.type}
                        value={value || input.value}
                        onChange={({ target }) =>
                            set(
                                input.type === "number"
                                    ? target.valueAsNumber
                                    : input.type === "date"
                                    ? target.valueAsDate
                                    : target.value
                            )
                        }
                    ></Input>
                </Label>
            );
        case "textarea":
            return (
                <Label
                    required={required}
                    title={input.label}
                    detail={input.detail}
                >
                    <Textarea
                        placeholder={input.placeholder}
                        value={value || input.value}
                        onChange={({ target }) => set(target.value)}
                    ></Textarea>
                </Label>
            );
        case "select":
            return (
                <Label
                    required={required}
                    title={input.label}
                    detail={input.detail}
                >
                    <Select
                        placeholder={input.placeholder}
                        value={value}
                        options={
                            input.options as {
                                label: string;
                                value: string;
                            }[]
                        }
                        onChange={({ target }) => set(target.value)}
                    ></Select>
                </Label>
            );
    }
}
