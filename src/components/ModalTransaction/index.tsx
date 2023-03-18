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
import { EnumTransactionType } from "../../contexts/ContextTransactionsProvider";
import { Controller, useForm } from "react-hook-form";

interface FeldsFormNewTransaction{
    name: string;
    category: string;
    price: number;
    type: EnumTransactionType
}

export default function ModalTransaction() {

    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { isSubmitting },
        control 
    } = useForm<FeldsFormNewTransaction>({
    defaultValues: {
        name: '',
        category: '',
        type: EnumTransactionType.performance
    }
    })

    async function onSubmitCreateTransaction(formTransactionData : FeldsFormNewTransaction) {
        await new Promise(res => setTimeout(res, 2000))
        reset()
    }

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
                <StyledModalForm onSubmit={handleSubmit(onSubmitCreateTransaction)}>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        required 
                        {...register('name')} 
                    />
                    <input 
                        type="number" 
                        placeholder="Valor" 
                        required 
                        {...register('price', { valueAsNumber: true})} 
                    />
                    <input 
                        type="text" 
                        placeholder="Categoria" 
                        required 
                        {...register('category')} 
                    />

                    <Controller  
                        control={control}
                        name='type'
                        defaultValue={EnumTransactionType.performance}
                        render={({ field }) => {
                            return (
                                <StyledTransactionTypeContainer onValueChange={field.onChange} value={field.value}>
                                    <StyledTypePerformance value={EnumTransactionType.performance}>
                                        <span>Receitas</span>
                                        <TrendUp size={32} />
                                    </StyledTypePerformance>
                                    <StyledTypeExpense value={EnumTransactionType.expense}>
                                        <span>Despesas</span>
                                        <TrendDown size={32} />
                                    </StyledTypeExpense>
                                </StyledTransactionTypeContainer>
                            )
                        }}
                    />

                    <StyledButtonFilled fillWidth disabled={isSubmitting}>Pronto</StyledButtonFilled>
                </StyledModalForm>
            </StyledModalBox>
        </Dialog.Portal>    
    )
}