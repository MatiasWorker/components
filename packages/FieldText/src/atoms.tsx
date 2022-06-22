import styled, { css } from "styled-components";

export const Switch = styled.div<{ checked?: boolean; disabled?: boolean }>`
    --bx-switch-space: 2px;
    --bx-switch-width: 40px;
    --bx-switch-height: 19px;
    --bx-switch-transition: 0.25s ease all;
    --bx-switch-fill: #d6e0ff;
    --bx-switch-fill-checked: #ff7a00;

    ---translate-x: 0px;

    width: var(--bx-switch-width);
    height: 19px;
    background: var(--bx-switch-fill);
    border-radius: 100px;
    display: flex;
    transition: var(--bx-switch-transition);
    cursor: pointer;

    ${(props) =>
        props.disabled &&
        css`
            pointer-events: none;
        `}

    ${(props) =>
        props.checked &&
        !props.disabled &&
        css`
            background: var(--bx-switch-fill-checked);
            ---translate-x: calc(
                var(--bx-switch-width) - var(--bx-switch-height)
            );
        `}

    ::before {
        --size: calc(var(--bx-switch-height) - var(--bx-switch-space) * 2);
        width: var(--size);
        height: var(--size);
        content: "";
        display: block;
        background: white;
        border-radius: 100px;
        margin: auto 2px;
        transform: translateX(var(---translate-x));
        transition: var(--bx-switch-transition);
    }
`;
