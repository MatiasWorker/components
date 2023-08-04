import "@bxreact/theme";
import { Form, useValidateState, ValidityStateProvider } from "./";
import { useState } from "react";

export default {
    title: "Generic/Form",
    argTypes: {
        usuario: {
            control: "text",
        },
    },
};

export const Default = (props) => {
    const [data, setData] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
    });

    return (
        <Form
            types={{}}
            formData={data}
            metaData={{
                usuario: props.usuario,
            }}
            columns={2}
            form={{
                input2: {
                    type: "text",
                    label: "RUT",
                    required: {
                        usuario: "matias",
                    },
                    show: {
                        usuario: "matias",
                    },
                },
                input1: {
                    type: "text",
                    label: "Nombre de quien envía ",
                    required: false,
                    placeholder: "Ej: Soledad Casas / LAPSA ltda",
                    detail: "Error!",
                    column: 2,
                    error: true,
                },
                input3: {
                    type: "text",
                    label: "Telefono",
                    required: true,
                },
                input4: {
                    type: "email",
                    label: "Corre electronico",
                    required: true,
                    column: 2,
                },
            }}
            onChange={(data) => {
                setData(data);
            }}
        ></Form>
    );
};

function GroupFormWithContext() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const form = useValidateState();

    return (
        <Form
            formData={formData}
            form={{
                name: {
                    type: "text",
                    label: "Name",
                    error: !form?.name?.valid,
                    detail: form?.name?.validationMessage,
                    maxLength: 5,
                    required: true,
                },
                email: {
                    type: "email",
                    label: "Password",
                    error: !form?.email?.valid,
                    detail: form?.email?.validationMessage,
                    required: true,
                },
            }}
            onChange={(formData) => {
                setFormData(formData);
            }}
        ></Form>
    );
}

export function GroupFormExampleWithContext() {
    return (
        <ValidityStateProvider>
            <GroupFormWithContext></GroupFormWithContext>
        </ValidityStateProvider>
    );
}

export function GroupFormExampleWithCallback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    return (
        <ValidityStateProvider>
            {(form) => (
                <Form
                    formData={formData}
                    form={{
                        name: {
                            type: "text",
                            label: "Name",
                            error: !form?.name?.valid,
                            detail: form?.name?.validationMessage,
                            maxLength: 5,
                            required: true,
                        },
                        email: {
                            type: "email",
                            label: "Password",
                            error: !form?.email?.valid,
                            detail: form?.email?.validationMessage,
                            required: true,
                        },
                    }}
                    onChange={(formData) => {
                        setFormData(formData);
                    }}
                ></Form>
            )}
        </ValidityStateProvider>
    );
}
