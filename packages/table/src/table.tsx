import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

export function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <td>
                        <Title>Random</Title>
                    </td>
                </tr>
            </thead>
        </table>
    );
}
