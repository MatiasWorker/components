import { Header } from "./";

export default {
    title: "Generic/Header",
    args: {
        required: true,
    },
};

export const Default = (props) => (
    <Header title="3. ¿Qué estás enviando?" required={!!props.required}>
        Ingresa las dimensiones de cada pieza de tu envío, su valor y categoría
    </Header>
);
