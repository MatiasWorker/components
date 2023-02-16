import "@bxreact/theme";
import { PuntoBlueList } from "./";

const data = [
    {
        geospatial: {
            type: "Point",
            coordinates: [-71.71784, -46.54294],
        },
        _id: "63d8845cba29a4ad9f80eb56",
        location: {
            geolocation: {
                latitude: -46.54294,
                longitude: -71.71784,
            },
            country_name: "Chile",
            state_name: "Aysén",
            city_name: "CHILE CHICO",
            city_id: "11401",
            street_name: "Cantalicio Jara",
            street_number: "749",
        },
        status: "active",
        agency_id: "4005",
        agency_name: "Punto Blue Express Provisiones Nissi",
        package_reception: true,
        pickup_availability: true,
        open_hours: {
            monday: [
                {
                    from: "11:00",
                    to: "22:00",
                },
            ],
            tuesday: [
                {
                    from: "11:00",
                    to: "22:00",
                },
            ],
            wednesday: [
                {
                    from: "11:00",
                    to: "22:00",
                },
            ],
            thursday: [
                {
                    from: "11:00",
                    to: "22:00",
                },
            ],
            friday: [
                {
                    from: "11:00",
                    to: "22:00",
                },
            ],
            saturday: [
                {
                    from: "12:00",
                    to: "22:00",
                },
            ],
            holidays: [],
        },
        last_updated: "",
        volumetric_capacity: "0",
        maximum_package_dimensions: {
            length: 1,
            height: 1,
            width: 1,
            weight: 20,
        },
        commune_code: "11401",
        phone: "6006000115",
        createdAt: "2023-01-31T03:00:44.438Z",
        __v: 0,
    },
    {
        geospatial: {
            type: "Point",
            coordinates: [-71.7256723, -46.5394756],
        },
        _id: "63d8845cba29a4316980eb63",
        location: {
            geolocation: {
                latitude: -46.5394756,
                longitude: -71.7256723,
            },
            country_name: "Chile",
            state_name: "Aysén",
            city_name: "CHILE CHICO",
            city_id: "11401",
            street_name: "Bernardo Ohiggins",
            street_number: "408",
        },
        status: "active",
        agency_id: "444",
        agency_name: "Punto Blue Express Regalitoys",
        package_reception: true,
        pickup_availability: true,
        open_hours: {
            monday: [
                {
                    from: "09:00",
                    to: "19:30",
                },
            ],
            tuesday: [
                {
                    from: "09:00",
                    to: "19:30",
                },
            ],
            wednesday: [
                {
                    from: "09:00",
                    to: "19:30",
                },
            ],
            thursday: [
                {
                    from: "09:00",
                    to: "19:30",
                },
            ],
            friday: [
                {
                    from: "09:00",
                    to: "19:30",
                },
            ],
            saturday: [
                {
                    from: "15:00",
                    to: "19:30",
                },
            ],
            holidays: [],
        },
        last_updated: "",
        volumetric_capacity: "0",
        maximum_package_dimensions: {
            length: 1,
            height: 1,
            width: 1,
            weight: 25,
        },
        commune_code: "11401",
        phone: "6006000115",
        createdAt: "2023-01-31T03:00:44.451Z",
        __v: 0,
    },
];

export default {
    title: "Business/Punto blue",
    args: {
        empty: false,
    },
};

export const Default = (props) => (
    <PuntoBlueList {...props} value="" options={data as any}></PuntoBlueList>
);
