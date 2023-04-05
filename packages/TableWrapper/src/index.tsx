import { useState } from "react";
import { Table, TableProps } from "@bxreact/table";
import { usePages } from "@bxreact/use-pages";
import { Pagination } from "@bxreact/pagination";
import "./index.css";

export interface TableWrapperProps<Data extends any[]>
    extends TableProps<Data> {
    paginations?: number[];
    labelPaginations?: string;
}

export const options = {
    paginations: [10, 20, 30, 40],
    labelPaginations: "Filas por página",
    moves: {
        ">": 1,
        ">>": 2,
        "<": -1,
        "<<": -2,
    },
};

export function TableWrapper<Data extends { [prop: string]: any }[]>({
    data,
    paginations = options.paginations,
    labelPaginations = options.labelPaginations,
    ...propsTable
}: TableWrapperProps<Data>) {
    const [pagesPerPage, setPagesPerPage] = useState(paginations[0]);

    const pages = usePages(data, {
        page: 0,
        pages: pagesPerPage,
    });

    return (
        <div className="bx-table-wrapper">
            <div className="bx-table-wrapper_overflow">
                <Table data={pages.group} {...(propsTable as any)}></Table>
            </div>
            <div className="bx-table-wrapper_footer">
                <Pagination
                    isMoveDisabled={(type) =>
                        pages.isDisabled(options.moves[type])
                    }
                    pagesPerPage={paginations}
                    pagedLabel={labelPaginations}
                    value={pagesPerPage}
                    moveLabel={`${pages.position.start} - ${pages.position.end} de ${pages.position.length}`}
                    onChangePagesPerPage={(value) =>
                        setPagesPerPage(Number(value))
                    }
                    onChangeMove={(type) => pages.to(options.moves[type])}
                ></Pagination>
            </div>
        </div>
    );
}

<TableWrapper
    data={[{ id: 1 }]}
    types={{
        id(data, value) {},
    }}
    header={{}}
></TableWrapper>;
