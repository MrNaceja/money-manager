import { Overlay, Content, Close } from "@radix-ui/react-dialog";
import { Root as TypeContainer, Item as Type } from '@radix-ui/react-radio-group';
import styled, { css } from "styled-components";

export const StyledModalClose = styled(Close)`
    line-height: 0;
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
    background: ${props => props.theme["gray-800"]};
    padding:3rem;
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display:flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    header {
        width: 100%;
        display: flex;
        align-items:center;
        justify-content: space-between;
    }
`

export const StyledModalForm = styled.form`
    display:flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    width:100%;
    input {
        width: 100%;
        border:none;
        background: ${props => props.theme["gray-900"]};
        border-radius: 5px;
        padding:.5rem;
        color: ${props => props.theme["gray-300"]}
    }
`

export const StyledTransactionTypeContainer = styled(TypeContainer)`
    display:flex;
    align-items:center;
    width: 100%;
    gap:1rem;
`

const StyledTypeTransaction = styled(Type)`
    display: flex;
    cursor: pointer;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background: ${props => props.theme["gray-700"]};
    border:none;
    padding: .5rem .8rem;
    border-radius: 5px;

    &:not([data-state = "checked"]):hover {
        filter: brightness(120%);
    }

`

export const StyledTypePerformance = styled(StyledTypeTransaction)`
    color: ${props => props.theme["gray-300"]};
    svg {
        color: ${props => props.theme["green-500"]}
    }

    &[data-state = "checked"]{
        background:  ${props => props.theme["green-500"]};
        svg {
            color: ${props => props.theme["gray-300"]};
        }
    }

`
export const StyledTypeExpense = styled(StyledTypeTransaction)`
    color: ${props => props.theme["gray-300"]};
    svg {
        color: ${props => props.theme["red-500"]}
    }

    &[data-state = "checked"] {
        background:  ${props => props.theme["red-500"]};
        svg {
            color: ${props => props.theme["gray-300"]};
        }
    }

`