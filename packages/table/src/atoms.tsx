import styled, { css } from "styled-components";

export const Table = styled.table`
    width: 100%;
    background: #f6f6f6;
    font-size: 12px;
    border-spacing: 0px;
`;

export const THead = styled.thead`
    font-weight: bold;
`;

export const TBody = styled.tbody``;

export const TFoot = styled.tfoot``;

export const Tr = styled.tr``;

export const Td = styled.td<{ transparent?: boolean }>`
    height: 48px;
    padding: 0px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    ${(props) =>
        !props.transparent &&
        css`
            background: white;
        `}
`;
