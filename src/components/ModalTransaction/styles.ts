import { Overlay, Content, Close } from "@radix-ui/react-dialog";
import styled from "styled-components";

export const StyledModalClose = styled(Close)`
    position: absolute;
    top: 1.25rem;
    line-height: 0;
    right: 1rem;
    color: ${props => props.theme["gray-300"]};
    background:transparent;
    border: none;
`

export const StyledModalOverlay = styled(Overlay)`
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,.75);
    position: fixed;
    inset: 0;
`

export const StyledModalBox = styled(Content)`
    min-width:32rem;
    background: ${props => props.theme["gray-700"]};
    padding:2rem 3.5rem;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display:flex;
    flex-direction: column;
    gap: 1rem;
`

export const StyledModalForm = styled.form`
    display:flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    input {
        width: 100%;
        border:none;
        background: ${props => props.theme["gray-900"]};
        border-radius: 5px;
        padding:.5rem;
        color: ${props => props.theme["gray-300"]}
    }
`