import styled, { css } from "styled-components";

interface StyledButtonProps{
    fillWidth?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
    padding: .75rem;
    border-radius:5px;
    cursor:pointer;
    transition: 0.2s;
    border:none;
    display:flex;
    align-items: center;
    justify-content: center;
    column-gap: .75rem;
    ${props => props.fillWidth && css` width: 100%;`};

    &:disabled {
        opacity:.5;
        cursor: not-allowed
    }
`

export const StyledButtonOutlined = styled(StyledButton)`
    background: transparent;
    color: ${props => props.theme["green-500"]};
    border: 2px solid ${props => props.theme["green-500"]};
    &:not(:disabled):hover{
        background: ${props => props.theme["green-500"]};
        color: ${props => props.theme["gray-100"]};
    }
`
export const StyledButtonFilled = styled(StyledButton)`
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme["gray-100"]};

    &:not(:disabled):hover{
        background: ${props => props.theme["green-800"]};
    }
`