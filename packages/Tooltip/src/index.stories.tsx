import "@bxreact/theme";
import { Tooltip } from "./";

export default {
    title: "Generic/Tooltip",
};

export const Default = () => (
    <Tooltip content={"Welcome!"}>
        <button>Hover</button>
    </Tooltip>
);
