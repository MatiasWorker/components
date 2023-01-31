import "./index.css";
import { InputData, InputForm, InputReplace } from "./types";
export { InputTypes, InputForm, InputUnknown } from "./types";
export { logic, required } from "./utils";
export interface Props<FormData extends InputData, MetaData extends InputData> {
    formData: FormData;
    metaData?: MetaData;
    form: InputForm<FormData, MetaData>;
    columns?: number;
    onChange: (data: FormData) => void;
    types?: InputReplace<FormData, MetaData>;
}
export declare function Form<FormData extends InputData, MetaFormData extends InputData>({ formData, metaData, form, onChange, columns, types, }: Props<FormData, MetaFormData>): JSX.Element;
