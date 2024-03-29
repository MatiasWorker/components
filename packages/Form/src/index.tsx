import {
    Checkbox,
    File,
    Input,
    Select,
    Switch,
    Textarea,
} from "@bxreact/input";

import { Label } from "@bxreact/label";
import { CSSProperties, ChangeEvent } from "react";
import "./index.css";
import {
    InputData,
    InputForm,
    InputMetaData,
    InputReplace,
    InputUnknown,
} from "./types";
import { inputIsRequired, logic } from "./utils";
export { InputForm, InputTypes, InputUnknown } from "./types";
export { logic, required } from "./utils";
export * from "./hook";

export interface Props<
    FormData extends InputData,
    MetaData extends InputMetaData
> {
    formData: FormData;
    metaData?: MetaData;
    form: InputForm<FormData, MetaData>;
    columns?: number;
    onChange: (data: FormData) => void;
    types?: InputReplace<FormData, MetaData>;
}

export function Form<
    FormData extends InputData,
    MetaFormData extends InputMetaData
>({
    formData,
    metaData,
    form,
    onChange,
    columns,
    types,
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
                .reduce((inputs, [prop, input]) => {
                    if (types?.[prop]) {
                        const next = types[prop](
                            input,
                            data,
                            data[prop] as any
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
                }, [])
                .reduce((cols, [prop, input], tabIndex) => {
                    const id = input?.column || 1;

                    cols[id] = cols[id] || [];
                    cols[id].push([prop, { ...input, tabIndex: tabIndex + 1 }]);

                    return cols;
                }, [])
                .map((col, i) => (
                    <div className="bx-form_column" key={i}>
                        {col.map(([prop, input]: [string, InputUnknown]) => {
                            const value = data[prop];
                            const set = (value) =>
                                onChange({
                                    ...data,
                                    [prop]: value,
                                });

                            const setAll = (nextData) =>
                                onChange({ ...data, ...nextData });
                            return (
                                <InputCase
                                    input={input}
                                    data={data}
                                    value={value}
                                    set={set}
                                    setAll={setAll}
                                    name={prop}
                                    key={prop}
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
    setAll,
    name,
}: {
    input: InputUnknown;
    data: InputData;
    value: any;
    required: boolean;
    name: string;
    set(nextValue: any): void;
    setAll(nextData: InputData): void;
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
        //@ts-ignore
        render,
        //@ts-ignore
        options: ignoreOptions,
        error,
        ...unknownProps
    } = input;

    const currentValue = value ?? inputValue;

    const currentStatus = error ? "danger" : status;

    if (loading) return <Input loading disabled></Input>;

    unknownProps.name = name;

    const onChange = (event: ChangeEvent<any>) =>
        "onChange" in unknownProps && unknownProps.onChange(event);

    switch (type) {
        case "custom":
            return render && render(data, value, name, setAll);
        case "checkbox":
        case "switch":
            return (
                <Label
                    required={required}
                    icon={
                        type === "checkbox" ? (
                            <Checkbox
                                {...unknownProps}
                                checked={!!value}
                                onChange={(event) => {
                                    set(event.target.checked);
                                    onChange(event);
                                }}
                            />
                        ) : (
                            <Switch
                                {...unknownProps}
                                checked={!!value}
                                onChange={(checked) => {
                                    set(checked);
                                }}
                            />
                        )
                    }
                    title={label}
                    detail={detail}
                    description={description}
                    status={currentStatus}
                ></Label>
            );
        case "text":
        case "number":
        case "email":
        case "date":
            return (
                <Label
                    required={required}
                    title={label}
                    detail={detail}
                    description={description}
                    status={currentStatus}
                >
                    <Input
                        {...unknownProps}
                        required={required}
                        type={type}
                        status={currentStatus}
                        placeholder={input.placeholder}
                        value={currentValue}
                        onChange={(event) => {
                            set(
                                type === "number"
                                    ? event.target.valueAsNumber
                                    : type === "date"
                                    ? event.target.valueAsDate
                                    : event.target.value
                            );
                            onChange(event);
                        }}
                    ></Input>
                </Label>
            );
        case "textarea":
            return (
                <Label
                    required={required}
                    title={label}
                    detail={detail}
                    description={description}
                    status={currentStatus}
                >
                    <Textarea
                        {...unknownProps}
                        required={required}
                        placeholder={input.placeholder}
                        value={currentValue}
                        onChange={(event) => {
                            set(event.target.value);
                            onChange(event);
                        }}
                    ></Textarea>
                </Label>
            );
        case "file":
            return (
                <Label
                    required={required}
                    title={label}
                    detail={detail}
                    description={description}
                    status={currentStatus}
                >
                    <File
                        {...unknownProps}
                        required={required}
                        onChange={(files) => set(files)}
                    ></File>
                </Label>
            );
        case "select":
            return (
                <Label
                    required={required}
                    title={label}
                    detail={detail}
                    description={description}
                    status={currentStatus}
                >
                    <Select
                        {...unknownProps}
                        required={required}
                        placeholder={input.placeholder}
                        value={value}
                        options={
                            input.options as {
                                label: string;
                                value: string;
                            }[]
                        }
                        onChange={(event) => {
                            set(event.target.value);
                            onChange(event);
                        }}
                    ></Select>
                </Label>
            );
    }
}

