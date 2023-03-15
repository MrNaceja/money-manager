import styled from "styled-components";

export const StyledSearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input{
        flex: 1;
        border-radius: 5px;
        border:none;
        background: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};
        padding: 1rem;

        &::placeholder {
            color: ${props => props.theme["gray-400"]}
        }
    }

`