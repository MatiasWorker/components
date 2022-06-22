import styled, { css } from "styled-components";

export const Text = styled.div`
    position: relative;
`;

export const Input = styled.input<{ disabled?: boolean }>`
    width: 100%;
    padding: 10px;
    min-height: 48px;
    box-sizing: border-box;
    border: none;
    background: transparent;
    ${(props) =>
        !props.disabled &&
        css`
            background: #f0f0f0;
        `}
`;

export const Mask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;
