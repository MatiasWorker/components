import "@bxreact/theme";
import { Form } from "./";
import { useState } from "react";

export default {
    title: "Generic/Form",
};

export const Default = (props) => {
    const [data, setData] = useState({
        account: "",
        email: "",
        reasonType: "",
        reasonTopic: "",
        detail: "",
        file: "",
        numberOs: "",
        notifyViaEmail: true,
    });

    return (
        <Form
            columns={2}
            formData={data}
            metaData={{
                supperapp: true as boolean,
            }}
            form={{
                account: {
                    type: "select",
                    label: "Cuenta corriente",
                    placeholder: "Cuenta corriente",
                    required: true,
                    options: [{ label: "76319382-1-x", value: "76319382-1-x" }],
                },
                email: {
                    type: "email",
                    label: "Email de contacto",
                    required: true,
                    placeholder: "Eg. demo@demo.com",
                    config: {
                        column: 2,
                    },
                },
                reasonType: {
                    type: "select",
                    label: "Tipo de ticket",
                    required: true,
                    options: [
                        {
                            value: "problema-con-pedido",
                            label: "problemas con mi pedido",
                        },
                        {
                            value: "consulta-sobre-mis-indemnizaciones",
                            label: "Consultas sobre mis indemnizaciones",
                        },
                        {
                            value: "solicitudes-o-problema-retiro",
                            label: "Solicitudes o problemas con retiros",
                        },
                        {
                            value: "consultas-comerciales",
                            label: "Consultas Comerciales",
                        },
                        {
                            value: "problemas-con-plataforma",
                            label: "Problemas con la plataforma",
                        },
                        {
                            value: "consultas-problemas-puntos-blue-express",
                            label: "Consultas o problemas de Puntos Blue Express",
                        },
                    ],
                    placeholder: "Tipo de ticket",
                    value: "t2",
                },
                reasonTopic: [
                    {
                        type: "select",
                        required: true,
                        label: "Motivo",
                        options: [
                            {
                                value: "pedido-incompleto",
                                label: "Pedido incompleto",
                            },
                            {
                                value: "pedido-atrasado-fecha-promesa",
                                label: "Pedido atrasado con respecto a su fecha de promesa",
                            },
                            {
                                value: "pedido-danado",
                                label: "Pedido dañado",
                            },
                            {
                                value: "solicitud-prueba-entrega",
                                label: "Solicitud prueba de entrega",
                            },
                            {
                                value: "destinatario-desconoce-entrega",
                                label: "Destinatario desconoce entrega del pedido",
                            },
                        ],
                        placeholder: "Seleccionar motivo",
                        logic: {
                            reasonType: "problema-con-pedido",
                        },
                        config: {
                            column: 2,
                        },
                    },
                    {
                        type: "select",
                        required: true,
                        label: "Motivo",
                        options: [
                            {
                                value: "consultar-estado-caso-indemnizacion",
                                label: "Consultar estado de mi caso de indemnización",
                            },
                            {
                                value: "crear-una-indemnizacion",
                                label: "Crear una indemnización",
                            },
                            {
                                value: "rectificacion-documentacion-erronea",
                                label: "Rectificación documentación erronea",
                            },
                            {
                                value: "motivo-de-rechazo",
                                label: "Motivo de rechazo",
                            },
                            {
                                value: "no-llego-finiquito",
                                label: "No me llego el finiquito",
                            },
                            {
                                value: "comprobante-pago-finiquito",
                                label: "Comprobante de pago del finiquito",
                            },
                        ],
                        placeholder: "Seleccionar motivo",
                        logic: {
                            reasonType: "consulta-sobre-mis-indemnizaciones",
                        },
                        config: {
                            column: 2,
                        },
                    },
                    {
                        type: "select",
                        required: true,
                        label: "Motivo",
                        options: [
                            {
                                value: "crear-reserva-retiro",
                                label: "Crear reserva para retiro",
                            },
                            {
                                value: "modificacion-direccion-retiro",
                                label: "Modificación en la dirección de retiro",
                            },
                            {
                                value: "modificacion-parametros-a-retirar",
                                label: "Modificación en cantidad de OS, volumen o peso a retirar",
                            },
                            {
                                value: "modificacion-fecha-hora-retiro",
                                label: "Modificación en fecha/hora de retiro",
                            },
                            {
                                value: "anulacion-reserva-retiro",
                                label: "Anulación de reserva retiro",
                            },
                            {
                                value: "retiro-no-realizado",
                                label: "Retiro no realizado",
                            },
                            {
                                value: "vehiculo-capacidad-retiro-insuficiente",
                                label: "Vehículo con capacidad de retiro insuficiente",
                            },
                        ],
                        placeholder: "Seleccionar motivo",
                        logic: {
                            reasonType: "solicitudes-o-problema-retiro",
                        },
                        config: {
                            column: 2,
                        },
                    },
                    {
                        type: "select",
                        required: true,
                        label: "Motivo",
                        options: [
                            {
                                value: "consultar-estado-caso-indemnizacion",
                                label: "Consultar estado de mi caso de indemnización",
                            },
                            {
                                value: "crear-una-indemnizacion",
                                label: "Crear una indemnización",
                            },
                            {
                                value: "rectificacion-documentacion-erronea",
                                label: "Rectificación documentación erronea",
                            },
                            {
                                value: "motivo-rechazo",
                                label: "Motivo de rechazo",
                            },
                            {
                                value: "no-llego-finiquito",
                                label: "No me llego el finiquito",
                            },
                            {
                                value: "comprobante-pago-finiquito",
                                label: "Comprobante de pago del finiquito",
                            },
                        ],
                        placeholder: "Seleccionar motivo",
                        logic: {
                            reasonType: "consulta-sobre-mis-indemnizaciones",
                        },
                        config: {
                            column: 2,
                        },
                    },
                    {
                        type: "select",
                        required: true,
                        label: "Motivo",
                        options: [
                            {
                                value: "reenvio-factura",
                                label: "Reenvío de factura",
                            },
                            {
                                value: "inconsistencias-facturado",
                                label: "Inconsistencias en lo facturado",
                            },
                            {
                                value: "solicitud-notas-creditos",
                                label: "Solicitud de notas de crédito",
                            },
                            {
                                value: "otras",
                                label: "Otras",
                            },
                        ],
                        placeholder: "Seleccionar motivo",
                        logic: {
                            reasonType: "consultas-comerciales",
                        },
                        config: {
                            column: 2,
                        },
                    },
                    {
                        type: "select",
                        required: true,
                        label: "Motivo",
                        options: [
                            {
                                value: "problemas-para-emitir-ordenes",
                                label: "Problemas para emitir ordenes",
                            },
                            {
                                value: "problema-resolucion-excepciones-ruta",
                                label: "Problemas para resolución de excepciones en ruta",
                            },
                            {
                                value: "problemas-acceder-plataforma",
                                label: "Problemas para acceder a la plataforma",
                            },
                            {
                                value: "tengo-dudas-funcionalidades-plataforma",
                                label: "Tengo dudas con las funcionalidades de la plataforma",
                            },
                            {
                                value: "problema-creacion-indemnizacion",
                                label: "Problema con la creación de una indemnización",
                            },
                        ],
                        placeholder: "Seleccionar motivo",
                        logic: {
                            reasonType: "problemas-con-plataforma",
                        },
                        config: {
                            column: 2,
                        },
                    },
                ],
                numberOs: {
                    type: "text",
                    required: true,
                    label: "Número de Orden de Servicio (OS)",
                    logic: [
                        {
                            reasonType: [
                                "problema-con-pedido",
                                "consulta-sobre-mis-indemnizaciones",
                                "consultas-problemas-puntos-blue-express",
                            ],
                        },
                    ],
                    config: {
                        column: 1,
                    },
                },
                detail: {
                    type: "textarea",
                    required: true,
                    label: "Detalle del motivo",
                    placeholder:
                        "Ingresa más información del motivo por el que estás creando el ticket",
                    detail: "Máximo 120 caracteres",
                    logic: [
                        {
                            reasonType: [
                                "problema-con-pedido",
                                "consulta-sobre-mis-indemnizaciones",
                                "consultas-problemas-puntos-blue-express",
                            ],
                        },
                    ],
                },
                file: {
                    type: "file",
                    label: "Sube un archivo(opcional)",
                    description:
                        "Carga archivos .png, .jpg o PDF de hasta [peso máximo]",
                    config: {
                        column: 2,
                    },
                    logic: {
                        reasonType: "problema-con-pedido",
                    },
                },
                notifyViaEmail: {
                    type: "checkbox",
                    label: "Notificar vía email la respuesta de este ticket",
                    config: {
                        column: 2,
                    },
                },
                // reservationNumberIsRequired: {
                //     type: "text",
                //     required: {
                //         reasonType: ["solicitudes-o-problema-retiro"],
                //     },
                //     logic: [
                //         {
                //             reasonType: ["solicitudes-o-problema-retiro"],
                //         },
                //     ],
                //     config: {
                //         column: 1,
                //     },
                // },
                // fileUrlIsRequired: {
                //     type: "text",
                //     required: {
                //         reasonType: [
                //             "problema-con-pedido",
                //             "problemas-con-plataforma",
                //         ],
                //     },
                //     logic: [
                //         {
                //             reasonType: [
                //                 "problema-con-pedido",
                //                 "problemas-con-plataforma",
                //             ],
                //         },
                //         {
                //             reasonTopic: [
                //                 "pedido-danado",
                //                 "problemas-para-emitir-ordenes",
                //             ],
                //         },
                //     ],
                //     config: {
                //         column: 2,
                //     },
                // },
                // descriptionIsRequired: {
                //     type: "textarea",
                //     required: {
                //         typeTicket: [
                //             "problema-con-pedido",
                //             "consulta-sobre-mis-indemnizaciones",
                //             "solicitudes-o-problema-retiro",
                //             "problemas-con-plataforma",
                //             "consultas-comerciales",
                //             "consultas-problemas-puntos-blue-express",
                //         ],
                //     },
                //     logic: [
                //         {
                //             typeTicket: [
                //                 "problema-con-pedido",
                //                 "consulta-sobre-mis-indemnizaciones",
                //                 "solicitudes-o-problema-retiro",
                //                 "problemas-con-plataforma",
                //                 "consultas-comerciales",
                //                 "consultas-problemas-puntos-blue-express",
                //             ],
                //         },
                //     ],
                //     config: {
                //         column: 1,
                //     },
                // },
            }}
            onChange={(data) => setData(data)}
            // status={{
            //     region() {
            //         return "loading";
            //     },
            // }}
        ></Form>
    );
};
