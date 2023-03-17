import * as Dialog from "@radix-ui/react-dialog";
import { StyledButtonFilled } from "../../styles/Button";
import { 
    StyledModalBox, 
    StyledModalForm, 
    StyledModalOverlay, 
    StyledModalClose, 
    StyledTransactionTypeContainer, 
    StyledTypeExpense,
    StyledTypePerformance } from "./styles";
import { TrendDown, TrendUp, X } from 'phosphor-react'

export default function ModalTransaction() {
    return (
        <Dialog.Portal>
            <StyledModalOverlay />
            <StyledModalBox>
                <header>
                    <Dialog.Title>Nova transação</Dialog.Title>
                    <StyledModalClose>
                        <X size={24}/>
                    </StyledModalClose>
                </header>
                <StyledModalForm>
                    <input type="text" placeholder="Nome" required/>
                    <input type="number" placeholder="Valor" required/>
                    <input type="text" placeholder="Categoria" required/>

                    <StyledTransactionTypeContainer>
                        <StyledTypePerformance value="performance">
                            <span>Receitas</span>
                            <TrendUp size={32} />
                        </StyledTypePerformance>
                        <StyledTypeExpense value="expense">
                            <span>Despesas</span>
                            <TrendDown size={32} />
                        </StyledTypeExpense>
                    </StyledTransactionTypeContainer>

                    <StyledButtonFilled fillWidth >Pronto</StyledButtonFilled>
                </StyledModalForm>
            </StyledModalBox>
        </Dialog.Portal>    
    )
}