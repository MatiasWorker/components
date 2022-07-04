interface Page {
    page: number;
    pages: number;
}
/**
 *
 * @param data - data to group according to Page
 * @param page - functions reactive to pagination
 */
export declare function usePages<Data extends any[]>(data: Data, page: Page): {
    to: (value?: number) => void;
    group: Data;
    isDisabled: (value?: number) => boolean;
    position: {
        page: number;
        start: number;
        end: number;
        length: number;
    };
};
export {};
