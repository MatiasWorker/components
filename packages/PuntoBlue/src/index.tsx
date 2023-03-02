import { Card } from "@bxreact/card";
import { Grid } from "@bxreact/grid";
import * as Icon from "@bxreact/icon";
import { Label } from "@bxreact/label";
import { ReactNode } from "react";
import "./index.css";
import { PuntoBlueItem } from "./item/item";
import { PuntoBlueResponseItem } from "./types";
export * from "./item/item";

export function PuntoBlueList({
    value,
    options,
    labelAlertUnselect = (
        <>
            Selecciona la <b>región y comuna</b> para ver los Puntos Blue
            Express
        </>
    ),
    labelAlertEmpty = (
        <>
            ¡Lo sentimos! Por el momento no tenemos un punto Blue Express
            disponible en esta zona. Te invitamos a buscar una comuna cercana.
        </>
    ),
    labelTitle = <>Selecciona el Punto Blue Express</>,
    labelDescription = <>{options.length} Puntos Blue Express</>,
    schedule,
    empty,
    onChange,
}: {
    value?: string;
    options: PuntoBlueResponseItem[];
    labelTitle?: ReactNode;
    labelDescription?: ReactNode;
    labelAlertUnselect?: ReactNode;
    labelAlertEmpty?: ReactNode;
    schedule?: boolean;
    empty?: boolean;
    onChange?: (value: string) => any;
}): JSX.Element {
    return (
        <Grid>
            <Label
                title={<h4>{labelTitle}</h4>}
                detail={<hr className="bx-punto-blue_hr" />}
            >
                <div>{labelDescription}</div>
            </Label>
            <div className="bx-punto-blue_scroll">
                {options.length && !empty ? (
                    options.map(
                        (
                            { open_hours, agency_name, location, agency_id },
                            i
                        ) => (
                            <PuntoBlueItem
                                title={agency_name}
                                schedule={schedule ? open_hours : null}
                                address={`${location.street_name} ${location.street_number}`}
                                status="Abierto"
                                checked={agency_id === value}
                                value={agency_id}
                                onChange={onChange}
                            ></PuntoBlueItem>
                        )
                    )
                ) : (
                    <Card
                        theme={"warning"}
                        padding="sm"
                        className="bx-punto-blue_alert"
                        radius="xs"
                    >
                        <Label
                            icon={
                                <Icon.Warning
                                    size="2rem"
                                    color="orange"
                                ></Icon.Warning>
                            }
                        >
                            {empty ? labelAlertEmpty : labelAlertUnselect}
                        </Label>
                    </Card>
                )}
            </div>
        </Grid>
    );
}
