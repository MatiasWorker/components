import {
    Checkbox,
    File,
    Input,
    Select,
    Switch,
    Textarea,
} from "@bxreact/input";

import { Label } from "@bxreact/label";
import { CSSProperties } from "react";
import "./index.css";
import { InputData, InputForm, InputUnknown } from "./types";
export { InputForm, InputUnknown } from "./types";
import { logic, inputIsRequired } from "./utils";
export { logic, required } from "./utils";

export interface Props<FormData extends InputData, MetaData extends InputData> {
    formData: FormData;
    metaData?: MetaData;
    form: InputForm<FormData, MetaData>;
    columns?: number;
    onChange: (data: FormData) => void;
}

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
    const viewForm = logic(form, data);

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
                .reduce((cols, [prop, input]) => {
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

                            return (
                                <InputCase
                                    input={input}
                                    data={data}
                                    value={value}
                                    set={set}
                                    required={inputIsRequired(input, data)}
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
                    description={input.description}
                    status={input.status}
                ></Label>
            );
        case "text":
        case "number":
        case "email":
        case "date":
            return (
                <Label
                    required={required}
                    title={input.label}
                    detail={input.detail}
                    description={input.description}
                    status={input.status}
                >
                    <Input
                        required={required}
                        type={input.type}
                        status={input.status}
                        placeholder={input.placeholder}
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
                    description={input.description}
                    status={input.status}
                >
                    <Textarea
                        required={required}
                        placeholder={input.placeholder}
                        value={value || input.value}
                        onChange={({ target }) => set(target.value)}
                    ></Textarea>
                </Label>
            );
        case "file":
            return (
                <Label
                    required={required}
                    title={input.label}
                    detail={input.detail}
                    description={input.description}
                    status={input.status}
                >
                    <File
                        required={required}
                        onChange={({ target }) => set(target.value)}
                    ></File>
                </Label>
            );
        case "select":
            return (
                <Label
                    required={required}
                    title={input.label}
                    detail={input.detail}
                    description={input.description}
                    status={input.status}
                >
                    <Select
                        required={required}
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
