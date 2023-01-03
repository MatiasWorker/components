import "@bxreact/theme";
import { Modal } from "./";
import { Card } from "@bxreact/card";

export default {
    title: "Generic/Modal",
    args: {
        show: false,
        zIndex: 0,
    },
};

export const Default = (props) => (
    <Modal {...props}>
        <Card style={{ padding: "1rem", boxSizing: "border-box" }}>
            culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
            Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem
            culpa veniam anim culpa non exercitation cupidatat ex nostrud aute
            elit veniam officia proident laboris exercitation labore fugiat
            tempor cupidatat in commodo et aute et aliqua consectetur
        </Card>
    </Modal>
);
