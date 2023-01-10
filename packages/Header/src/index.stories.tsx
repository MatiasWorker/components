import { Header } from "./";

export default {
    title: "Generic/Header",
    args: {
        title: "1. ¿Qué estás enviando?",
        small: false,
        required: true,
    },
};

export const Default = (props) => (
    <Header {...props}>
        Ingresa las dimensiones de cada pieza de tu envío, su valor y categoría
    </Header>
);

export const WithRightIcon = (props) => (
    <Header {...props} rightIcon="😀">
        Ingresa las dimensiones de cada pieza de tu envío, su valor y categoría
    </Header>
);
