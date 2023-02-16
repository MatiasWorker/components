import type { Status } from "@bxreact/theme";
export interface InputData {
    [prop: string]: number | boolean | string | File;
}

export interface InputMetaData {
    [prop: string]: any;
}

export type InputOptions<Value extends unknown> = {
    label: string;
    value?: Value;
};

export type Logic<Data extends InputData> =
    | Partial<Data>
    | {
          [I in keyof Data]?: Data[I][];
      };

export interface InputLogic<Data extends InputData> {
    disabled?: boolean | Logic<Data> | Logic<Data>[];
    required?: boolean | Logic<Data> | Logic<Data>[];
    show?: Logic<Data> | Logic<Data>[];
}

export interface InputGeneric<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputLogic<Data & MetaData> {
    label?: string;
    detail?: string;
    description?: string;
    name?: string;
    column?: number;
    loading?: boolean;
    tabIndex?: number;
    value?: Value;
    placeholder?: string;
    status?: Status;
}

export interface InputSelect<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputGeneric<Data, MetaData, Value> {
    type: "select";
    options: InputOptions<Value>[];
}

export interface InputText<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputGeneric<Data, MetaData, Value> {
    type: "text";
    minLength?: number;
    maxLength?: number;
}

export interface InputDate<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputGeneric<Data, MetaData, Value> {
    type: "date";
    min?: number;
    max?: number;
}

export interface InputEmail<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputGeneric<Data, MetaData, Value> {
    type: "email";
}

export interface InputTextArea<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputGeneric<Data, MetaData, Value> {
    type: "textarea";
}

export interface InputNumber<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputGeneric<Data, MetaData, Value> {
    type: "number";
    min?: number;
    max?: number;
    step?: number;
}

export interface InputCheckbox<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputGeneric<Data, MetaData, Value> {
    type: "checkbox" | "switch";
    checked?: boolean;
}

export interface InputRadio<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputGeneric<Data, MetaData, Value> {
    type: "radio";
    options: InputOptions<Value>;
}

export interface InputFile<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputGeneric<Data, MetaData, Value> {
    type: "file";
    accept?: string;
}

export interface InputCustom<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value extends unknown
> extends InputGeneric<Data, MetaData, Value> {
    type: "custom";
    render?: (
        data: Data & MetaData,
        value: Value,
        name: string,
        set: (nextData: InputData) => void
    ) => any;
}

export type InputTypes<
    Data extends InputData,
    MetaData extends InputMetaData,
    Value
> =
    | InputSelect<Data, MetaData, Value>
    | InputRadio<Data, MetaData, Value>
    | InputText<Data, MetaData, Value>
    | InputNumber<Data, MetaData, Value>
    | InputCheckbox<Data, MetaData, Value>
    | InputDate<Data, MetaData, Value>
    | InputFile<Data, MetaData, Value>
    | InputEmail<Data, MetaData, Value>
    | InputCustom<Data, MetaData, Value>
    | InputTextArea<Data, MetaData, Value>;

export type InputForm<Data extends InputData, MetaData extends InputMetaData> =
    {
        [Prop in keyof Data]:
            | InputTypes<Data, MetaData, Data[Prop]>
            | InputTypes<Data, MetaData, Data[Prop]>[];
    };

export type InputReplace<
    Data extends InputData,
    MetaData extends InputMetaData
> = {
    [Prop in keyof Data]?: (
        input: InputUnknown,
        data: Data & MetaData,
        value: Data[Prop]
    ) =>
        | InputUnknown
        | {
              [input: string]: InputUnknown;
          };
};

export type InputUnknown = InputTypes<any, any, any>;
