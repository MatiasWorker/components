import "./index.css";
import { InputData, InputForm } from "./types";
export { InputForm } from "./types";
export interface Props<FormData extends InputData, MetaData extends InputData> {
    formData: FormData;
    metaData?: MetaData;
    form: InputForm<FormData, MetaData>;
    columns?: number;
    onChange: (data: FormData) => void;
}
export declare function Form<FormData extends InputData, MetaFormData extends InputData>({ formData, metaData, form, onChange, columns, }: Props<FormData, MetaFormData>): JSX.Element;
