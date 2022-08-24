import { useState, useEffect } from "react";
import { FieldSwitch } from "@bxreact/field-switch";
import { FieldText } from "@bxreact/field-text";
import { FieldSelect } from "@bxreact/field-select";
import { TableCell } from "@bxreact/table";
import { TableWrapper } from "@bxreact/table-wrapper";

export default {
    title: "Table/Example",
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

interface RootObject {
    avatar: string;
    bio: string;
    email: string;
    emailVerified: boolean | string;
    firstName: string;
    fullName: string;
    id: number;
    lastName: string;
    newKey: number;
    phone: string;
    selected: boolean;
    twitterHandle: string;
    username: string;
}

export function Example() {
    const [updates, setUpdates] = useState<{
        [index: number]: any;
    }>({});

    const [data, setData] = useState<RootObject[]>([]);

    useEffect(() => {
        fetch("https://example-data.draftbit.com/users?_limit=40")
            .then((res) => res.json())
            .then(setData);
    }, []);

    return (
        <div>
            <TableWrapper
                rowStyle={(data) =>
                    data.id === 1
                        ? {
                              "--table-row-background": "#FFE9E9",
                          }
                        : null
                }
                data={data}
                header={{
                    id: "",
                    status: (
                        <TableCell background="tomato" color="white">
                            Status
                        </TableCell>
                    ),
                    fullName: "Nombre",
                    avatar: "Imagen",
                    newKey: "newKey",
                    email: "Email",
                    emailVerified: "Seguro",
                    phone: "Telefono",
                    bio: "Bio",
                }}
                types={{
                    id: (data, value) => <strong>{value}</strong>,
                    status: (data) => <TableCell>Status</TableCell>,
                    avatar: (data, value) => (
                        <img
                            src={value}
                            loading="lazy"
                            style={{ width: 30, height: 30, borderRadius: 100 }}
                        />
                    ),
                    emailVerified: (data, value) => (
                        <FieldSwitch
                            checked={
                                "emailVerified" in (updates[data.id] || {})
                                    ? updates[data.id].emailVerified
                                    : value
                            }
                            onChange={(emailVerified) => {
                                setUpdates({
                                    ...updates,
                                    [data.id]: {
                                        ...updates[data.id],
                                        emailVerified,
                                    },
                                });
                            }}
                        ></FieldSwitch>
                    ),
                    newKey: () => (
                        <FieldSelect
                            appearance="cell"
                            placeholder="Region"
                            value=""
                            status="danger"
                            options={[
                                {
                                    label: "1 id pariatur anim sunt",
                                    value: "a",
                                },
                                {
                                    label: "2 id pariatur anim sunt...",
                                    value: "b",
                                },
                            ]}
                            onChange={() => {}}
                        ></FieldSelect>
                    ),
                    default: (data, value, property) => (
                        <FieldText
                            value={updates?.[data.id]?.[property] || value}
                            status={data.id === 1 ? "danger" : ""}
                            onChange={(value) => {
                                setUpdates({
                                    ...updates,
                                    [data.id]: {
                                        ...updates[data.id],
                                        [property]: value,
                                    },
                                });
                            }}
                        ></FieldText>
                    ),
                }}
            ></TableWrapper>
        </div>
    );
}
