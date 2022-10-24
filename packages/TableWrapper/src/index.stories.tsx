import { useEffect, useState } from "react";
import { TableWrapper } from ".";

export default {
    title: "Table/Wrapper",
    component: TableWrapper,
    argTypes: {
        collapse: {
            control: "boolean",
        },
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

export function ExampleTable({ collapse }: typeof ExampleTable.args) {
    const [data, setData] = useState<RootObject[]>([]);

    useEffect(() => {
        fetch("https://example-data.draftbit.com/users?_limit=40")
            .then((res) => res.json())
            .then(setData);
    }, []);

    return (
        <TableWrapper
            collapse={collapse}
            data={data}
            header={{
                firstName: "Nombre",
                lastName: "Apellido",
                email: "Email",
                phone: "Telefono",
                avatar: "Imagen",
            }}
            types={{
                avatar(data, value) {
                    return <img src={value} width="30px" height="30px" />;
                },
            }}
        ></TableWrapper>
    );
}

ExampleTable.args = {
    collapse: false,
};
