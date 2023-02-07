import { ItemProps } from "./item/item";

export interface PuntoBlueResponseItem {
    geospatial: {
        type: string;
        coordinates: [number, number];
    };
    location: {
        geolocation: {
            latitude: number;
            longitude: number;
        };
        country_name: string;
        state_name: string;
        city_name: string;
        city_id: string;
        street_name: string;
        street_number: string;
    };
    status: string;
    agency_id: string;
    agency_name: string;
    package_reception: boolean;
    pickup_availability: boolean;
    open_hours: ItemProps["schedule"];
    last_updated: string;
    volumetric_capacity: string;
    maximum_package_dimensions: {
        length: number;
        height: number;
        width: number;
        weight: number;
    };
    commune_code: string;
    phone: string;
    createdAt: string;
}
