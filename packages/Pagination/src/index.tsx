import { FieldSelect } from "@bx/field-select";
import "./index.css";

type PropsButtonType = ">>" | ">" | "<<" | "<";
type OnChangeMove = (value: PropsButtonType) => void;

interface PropsButton {
    type: PropsButtonType;
    disabled?: boolean;
    onChangeMove?: OnChangeMove;
}

interface PropsPagination {
    pagesPerPage: number[];
    pagedLabel: string;
    moveLabel: string;
    onChangePagesPerPage?: (value: string) => void;
    onChangeMove?: OnChangeMove;
    isMoveDisabled?: (value: PropsButtonType) => boolean;
}

export function PaginationButton({
    type,
    disabled,
    onChangeMove,
}: PropsButton) {
    return (
        <button
            disabled={disabled}
            onClick={() => onChangeMove && onChangeMove(type)}
            className={`pagination_btn ${
                disabled ? "pagination_btn--disabled" : ""
            }`}
        >
            {type == ">>" ? (
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
                    <path
                        d="M5.22675 0.22471C4.92442 0.532422 4.92442 1.01828 5.22675 1.32599L11.1701 7.37495L5.2188 13.6911C4.92442 13.9988 4.93237 14.4928 5.24267 14.7843C5.55296 15.0758 6.03033 15.0758 6.31676 14.76L12.7852 7.9013C12.9284 7.74744 13 7.5531 13 7.35875C13 7.15631 12.9284 6.96197 12.7772 6.80811L6.3088 0.224711C6.00647 -0.0749024 5.52909 -0.0749025 5.22675 0.22471Z"
                        fill="var(--pagination-move-color)"
                    />
                    <path
                        d="M0.99238 0.22471C0.690043 0.532422 0.690043 1.01828 0.99238 1.32599L6.93569 7.37495L0.984422 13.6911C0.690041 13.9988 0.697997 14.4928 1.00829 14.7843C1.31858 15.0758 1.79596 15.0758 2.08238 14.76L8.55081 7.9013C8.69402 7.74744 8.76563 7.5531 8.76563 7.35875C8.76563 7.15631 8.69402 6.96197 8.54285 6.80811L2.07443 0.224711C1.77209 -0.0749024 1.29472 -0.0749025 0.99238 0.22471Z"
                        fill="var(--pagination-move-color)"
                    />
                </svg>
            ) : type == ">" ? (
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path
                        d="M0.992378 0.224711C0.690041 0.532422 0.690041 1.01828 0.992378 1.32599L6.93569 7.37495L0.984422 13.6911C0.690041 13.9988 0.697997 14.4928 1.00829 14.7843C1.31858 15.0758 1.79596 15.0758 2.08238 14.76L8.55081 7.90129C8.69402 7.74744 8.76562 7.5531 8.76562 7.35875C8.76562 7.15631 8.69402 6.96197 8.54285 6.80811L2.07443 0.224711C1.77209 -0.074903 1.29472 -0.074903 0.992378 0.224711Z"
                        fill="var(--pagination-move-color)"
                    />
                </svg>
            ) : type == "<" ? (
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
                    <path
                        d="M8.53887 14.7753C8.84121 14.4676 8.84121 13.9817 8.53887 13.674L2.59556 7.62505L8.54683 1.30888C8.84121 1.00116 8.83325 0.507207 8.52296 0.215691C8.21267 -0.0758245 7.73529 -0.0758245 7.44887 0.239984L0.980444 7.0987C0.837231 7.25256 0.765625 7.4469 0.765625 7.64125C0.765625 7.84369 0.837231 8.03803 0.9884 8.19189L7.45682 14.7753C7.75916 15.0749 8.23653 15.0749 8.53887 14.7753Z"
                        fill="var(--pagination-move-color)"
                    />
                </svg>
            ) : (
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
                    <path
                        d="M8.3045 14.7753C8.60683 14.4676 8.60683 13.9817 8.3045 13.674L2.36119 7.62505L8.31245 1.30888C8.60683 1.00116 8.59888 0.507207 8.28858 0.215691C7.97829 -0.0758245 7.50092 -0.0758245 7.21449 0.239984L0.746069 7.0987C0.602856 7.25256 0.53125 7.4469 0.53125 7.64125C0.53125 7.84369 0.602856 8.03803 0.754025 8.19189L7.22245 14.7753C7.52478 15.0749 8.00216 15.0749 8.3045 14.7753Z"
                        fill="var(--pagination-move-color)"
                    />
                    <path
                        d="M12.5389 14.7753C12.8412 14.4676 12.8412 13.9817 12.5389 13.674L6.59556 7.62505L12.5468 1.30888C12.8412 1.00116 12.8333 0.507207 12.523 0.215691C12.2127 -0.0758245 11.7353 -0.0758245 11.4489 0.239984L4.98044 7.0987C4.83723 7.25256 4.76563 7.4469 4.76563 7.64125C4.76563 7.84369 4.83723 8.03803 4.9884 8.19189L11.4568 14.7753C11.7592 15.0749 12.2365 15.0749 12.5389 14.7753Z"
                        fill="var(--pagination-move-color)"
                    />
                </svg>
            )}
        </button>
    );
}

export function Pagination({
    pagesPerPage,
    pagedLabel,
    moveLabel,
    onChangePagesPerPage,
    onChangeMove,
    isMoveDisabled,
}: PropsPagination) {
    return (
        <div className="pagination">
            <div className="pagination_paged">
                <strong className="pagination_paged_label">{pagedLabel}</strong>
                <FieldSelect
                    value="10"
                    onChange={onChangePagesPerPage}
                    options={pagesPerPage.map((value) => ({
                        label: value.toString(),
                        value: value.toString(),
                    }))}
                ></FieldSelect>
            </div>
            <div className="pagination_move">
                <PaginationButton
                    onChangeMove={onChangeMove}
                    disabled={isMoveDisabled && isMoveDisabled("<<")}
                    type="<<"
                ></PaginationButton>
                <PaginationButton
                    onChangeMove={onChangeMove}
                    disabled={isMoveDisabled && isMoveDisabled("<")}
                    type="<"
                ></PaginationButton>
                <strong className="pagination_move_label">{moveLabel}</strong>
                <PaginationButton
                    onChangeMove={onChangeMove}
                    disabled={isMoveDisabled && isMoveDisabled(">")}
                    type=">"
                ></PaginationButton>
                <PaginationButton
                    onChangeMove={onChangeMove}
                    disabled={isMoveDisabled && isMoveDisabled(">>")}
                    type=">>"
                ></PaginationButton>
            </div>
        </div>
    );
}
