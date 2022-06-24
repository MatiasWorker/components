import { useState } from "react";

interface Page {
    page: number;
    pages: number;
}

/**
 * Calculate group limit in pagination
 * @param data - date that defines the length
 * @param pages - group limit
 */
const getLimit = (data: any[], pages: number) =>
    Math.round(data.length / pages);

/**
 *
 * @param data - data to group according to Page
 * @param page - functions reactive to pagination
 */
function usePages<Data extends any[]>(data: Data, page: Page) {
    const [state, setState] = useState(page);

    const { length } = data;
    const start = state.page * state.pages;
    const limit = getLimit(data, page.pages);

    let end = start + state.pages;
    end = end > length ? length : end;

    const group = data.slice(start, end) as Data;

    /**
     * to allows jumping between pages, a positive value is equivalent to next and a negative value to previous
     * @example
     * >  == 1
     * <  == -1
     * >> == 2
     * << == -2
     */
    function to(value = 1) {
        let nextPage = state.page + value;
        nextPage = nextPage > 0 ? nextPage : 0;

        if (limit > nextPage) setState({ ...state, page: nextPage });
    }

    /**
     * check if it is possible to dispatch a future action of to
     */
    function isDisabled(value = 1) {
        let nextPage = state.page + value;
        return !(nextPage > -1 ? nextPage < limit : false);
    }

    return {
        to,
        group,
        isDisabled,
        position: {
            page: state.page,
            start: start + 1,
            end,
            length,
        },
    };
}

const PAGES_PER_PAGES = [10, 20, 30, 40];

export function Example() {
    const [pagesPerPage, setPagesPerPage] = useState(PAGES_PER_PAGES[0]);
    const [currentPage, setCurrentPage] = useState(0);

    const data = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
    ];

    const pages = usePages(data, {
        page: 0,
        pages: 3,
    });

    return (
        <div>
            {pages.group.map((data) => (
                <h1>{data.id}</h1>
            ))}
            <strong>
                {pages.position.start} - {pages.position.end} de{" "}
                {pages.position.length}
            </strong>
            <button
                disabled={pages.isDisabled(-1)}
                onClick={() => {
                    pages.to(-1);
                }}
            >
                prev
            </button>
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
