import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`

export const StyledHeader = styled.header`
    width:100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
`
