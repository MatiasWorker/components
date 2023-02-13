import "@bxreact/theme";
import { Form } from "./";
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
                    required: true,
                    logic: {
                        usuario: "matias",
                    },
                },
                input1: {
                    type: "text",
                    label: "Nombre de quien envía ",
                    required: false,
                    placeholder: "Ej: Soledad Casas / LAPSA ltda",
                    config: {
                        column: 2,
                    },
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
                    config: {
                        column: 2,
                    },
                },
            }}
            onChange={(data) => {
                setData(data);
            }}
        ></Form>
    );
};
