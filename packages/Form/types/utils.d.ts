import { InputUnknown } from "./types";
declare type Form = {
    [prop: string]: InputUnknown | InputUnknown[];
};
declare type Data = {
    [prop: string]: any;
};
export declare const isInputs: (value: any) => value is InputUnknown[];
export declare const isBoolean: (value: any) => value is boolean;
/**
 * Verifica el estado de requerido de todos los campos del formulario
 */
export declare const required: (form: Form, data: {
    [prop: string]: any;
}) => boolean;
/**
 * Permite retornar los inputs segun la data dada.
 */
export declare const logic: (form: Form, data: Data) => {
    [prop: string]: InputUnknown;
};
export declare const inputIsRequired: (input: InputUnknown, data: Data) => boolean;
export {};
