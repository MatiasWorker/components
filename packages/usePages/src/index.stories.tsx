import { usePages } from "./";

export default {
    title: "Table/usePages",
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

function ComponentExample() {
    const data = [
        { id: 1, label: "Post 1" },
        { id: 2, label: "Post 2" },
        { id: 3, label: "Post 3" },
        { id: 4, label: "Post 4" },
        { id: 5, label: "Post 5" },
        { id: 6, label: "Post 6" },
        { id: 7, label: "Post 7" },
        { id: 8, label: "Post 8" },
    ];

    const pages = usePages(data, {
        page: 0,
        pages: 3,
    });

    return (
        <div>
            <div>
                {pages.group.map((data) => (
                    <div>
                        <h1>
                            {data.id} - {data.label}
                        </h1>
                    </div>
                ))}
            </div>

            <button
                disabled={pages.isDisabled(-1)}
                onClick={() => {
                    pages.to(-1);
                }}
            >
                prev
            </button>
            <strong>
                {pages.position.start} - {pages.position.end} de{" "}
                {pages.position.length}
            </strong>
            <button
                disabled={pages.isDisabled(1)}
                onClick={() => {
                    pages.to(1);
                }}
            >
                next
            </button>
        </div>
    );
}

export const ExampleUsePages = () => <ComponentExample></ComponentExample>;
