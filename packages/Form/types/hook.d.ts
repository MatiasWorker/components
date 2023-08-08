import { FormHTMLAttributes, ReactNode } from "react";
interface Fields {
    [name: string]: ValidityState & {
        validationMessage: string;
    };
}
export declare function ValidityStateProvider({ children, onSubmit, onClick, revalidate: timeout, ...props }: Omit<FormHTMLAttributes<HTMLFormElement>, "children"> & {
    revalidate: number;
    children: ReactNode | ((form: ReturnType<typeof useValidateState>, revalidate: ReturnType<typeof useRevalidateState>) => ReactNode);
}): JSX.Element;
export declare function useValidateState(observer?: {
    subscribe(...args: any): any;
}): Fields;
export declare function useRevalidateState(): () => void;
export {};
