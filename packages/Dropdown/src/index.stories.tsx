import "@bxreact/theme";
import { Dropdown } from "./";

export default {
    title: "Generic/Dropdown",
};

export const Default = () => (
    <Dropdown
        content={
            <ul>
                <li className="dropdown_header">
                    <span>Header!</span>
                </li>
                <li>
                    <span>Option</span>
                    <button>1</button>
                </li>
                <li>
                    <span>Option</span>
                    <button>2</button>
                </li>
                <li></li>
            </ul>
        }
    >
        <button>Click!</button>
    </Dropdown>
);
