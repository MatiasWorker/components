import "@bxreact/theme";
import { Grid } from "./";

export default {
    title: "Generic/Grid",
    argTypes: {
        align: {
            options: ["center", "left", "right"],
            control: { type: "radio" },
        },
    },
    args: {
        cols: 2,
        minWidth: "",
    },
};

export const Default = (props) => (
    <Grid {...props}>
        <div>
            culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
            Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem
            culpa veniam anim culpa non exercitation cupidatat ex nostrud aute
            elit veniam officia proident laboris exercitation labore fugiat
            tempor cupidatat in commodo et aute et aliqua consectetur
        </div>
        <div>
            culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
            Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem
            culpa veniam anim culpa non exercitation cupidatat ex nostrud aute
            elit veniam officia proident laboris exercitation labore fugiat
            tempor cupidatat in commodo et aute et aliqua consectetur
        </div>
        <div>
            culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
            Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem
            culpa veniam anim culpa non exercitation cupidatat ex nostrud aute
            elit veniam officia proident laboris exercitation labore fugiat
            tempor cupidatat in commodo et aute et aliqua consectetur
        </div>
    </Grid>
);

export const Columns = (props) => (
    <Grid {...props}>
        <div>
            culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
            Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem
            culpa veniam anim culpa non exercitation cupidatat ex nostrud aute
            elit veniam officia proident laboris exercitation labore fugiat
            tempor cupidatat in commodo et aute et aliqua consectetur
        </div>
        <div>
            culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
            Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem
            culpa veniam anim culpa non exercitation cupidatat ex nostrud aute
            elit veniam officia proident laboris exercitation labore fugiat
            tempor cupidatat in commodo et aute et aliqua consectetur
        </div>
        <div>
            culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
            Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem
            culpa veniam anim culpa non exercitation cupidatat ex nostrud aute
            elit veniam officia proident laboris exercitation labore fugiat
            tempor cupidatat in commodo et aute et aliqua consectetur
        </div>
    </Grid>
);

Columns.args = {
    cols: "1fr 1fr",
    minWidth: "5rem",
};

export const Align = (props) => (
    <Grid {...props}>
        <h1>Title</h1>
        <div>
            culpa ea laborum sint esse sit eu esse voluptate commodo nostrud et
            Lorem id excepteur cillum in sint nisi esse Lorem et esse Lorem ...
        </div>
        <div>
            <button>Ok</button>
        </div>
    </Grid>
);

Align.args = {
    align: "center",
};
