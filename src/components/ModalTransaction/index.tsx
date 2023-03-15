import * as Dialog from "@radix-ui/react-dialog";
import { StyledButtonFilled } from "../../styles/Button";
import { StyledModalBox, StyledModalForm, StyledModalOverlay, StyledModalClose } from "./styles";
import { X } from 'phosphor-react'

export default function ModalTransaction() {
    return (
        <Dialog.Portal>
            <StyledModalOverlay />
            <StyledModalBox>
                <Dialog.Title>Nova transação</Dialog.Title>
                <StyledModalClose>
                    <X size={24}/>
                </StyledModalClose>
                <StyledModalForm>
                    <input type="text" placeholder="Nome" required/>
                    <input type="number" placeholder="Valor" required/>
                    <input type="text" placeholder="Categoria" required/>
                    <StyledButtonFilled fillWidth >Pronto</StyledButtonFilled>
                </StyledModalForm>
            </StyledModalBox>
        </Dialog.Portal>    
    )
}