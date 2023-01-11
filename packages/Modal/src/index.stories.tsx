import "@bxreact/theme";
import { Modal, ModalHeader } from "./";
import { Card } from "@bxreact/card";
import { useState } from "react";

export default {
    title: "Generic/Modal",
    args: {
        show: true,
        zIndex: 10,
        maxWidth: "520px",
    },
};

export const Default = (props) => {
    const [show, setShow] = useState(props.show);
    return (
        <Modal {...props} onClosed={() => setShow(false)} show={show}>
            <Card padding="sm">
                <ModalHeader>Modal</ModalHeader>
                culpa ea laborum sint esse sit eu esse voluptate commodo nostrud
                et Lorem id excepteur cillum in sint nisi esse Lorem et esse
                Lorem culpa veniam anim culpa non exercitation cupidatat ex
                nostrud aute elit veniam officia proident laboris exercitation
                labore fugiat tempor cupidatat in commodo et aute et aliqua
                consectetur
            </Card>
        </Modal>
    );
};
