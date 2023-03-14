import styled from "styled-components";

const StyledButton = styled.button`
    padding: .5rem;
    border-radius:5px;
    cursor:pointer;
    transition: 0.2s;
    border:none;
`

export const StyledButtonOutlined = styled(StyledButton)`
    background: transparent;
    color: ${props => props.theme["green-500"]};
    border: 2px solid ${props => props.theme["green-500"]};
    &:hover{
        background: ${props => props.theme["green-500"]};
        color: ${props => props.theme["gray-100"]};
    }
`
export const StyledButtonFilled = styled(StyledButton)`
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme["gray-100"]};

    &:hover{
        background: ${props => props.theme["green-800"]};
    }
`