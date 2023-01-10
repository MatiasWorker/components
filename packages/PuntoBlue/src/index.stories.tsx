import "@bxreact/theme";
import { PuntoBlue } from "./";

export default {
    title: "Business/Punto blue",
    args: {
        title: "Punto Blue Express Almacen Belorado",
        status: "Abierto",
        address: "Julio Prado 1885",
        checked: false,
        schedule: {
            monday: [
                {
                    from: "16:00",
                    to: "20:00",
                },
            ],
            tuesday: [
                {
                    from: "16:00",
                    to: "20:00",
                },
            ],
            wednesday: [
                {
                    from: "16:00",
                    to: "20:00",
                },
            ],
            thursday: [
                {
                    from: "16:00",
                    to: "20:00",
                },
            ],
            friday: [
                {
                    from: "16:00",
                    to: "20:00",
                },
            ],
            saturday: [
                {
                    from: "16:00",
                    to: "18:00",
                },
            ],
            holidays: [],
        },
    },
};

export const Default = (props) => (
    <PuntoBlue {...props}>
        culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
        Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem culpa
        veniam anim culpa non exercitation cupidatat ex nostrud aute elit veniam
        officia proident laboris exercitation labore fugiat tempor cupidatat in
        commodo et aute et aliqua consectetur
    </PuntoBlue>
);
