import "./index.css";
declare type PropsButtonType = ">>" | ">" | "<<" | "<";
declare type OnChangeMove = (value: PropsButtonType) => void;
interface PropsButton {
    type: PropsButtonType;
    disabled?: boolean;
    onChangeMove?: OnChangeMove;
}
interface PropsPagination {
    pagesPerPage: number[];
    pagedLabel: string;
    moveLabel: string;
    value: number;
    onChangePagesPerPage?: (value: string) => void;
    onChangeMove?: OnChangeMove;
    isMoveDisabled?: (value: PropsButtonType) => boolean;
}
export declare function PaginationButton({ type, disabled, onChangeMove, }: PropsButton): JSX.Element;
export declare function Pagination({ pagesPerPage, pagedLabel, moveLabel, onChangePagesPerPage, onChangeMove, isMoveDisabled, value, }: PropsPagination): JSX.Element;
export {};
