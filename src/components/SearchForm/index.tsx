import { StyledButtonOutlined } from "../../styles/Button";
import { StyledSearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { ContextTransactions } from "../../contexts/ContextTransactionsProvider";

interface FieldSearch {
    search: string
}

export default function SearchForm() { 

    const { loadTransactions } = useContext(ContextTransactions)

    const { register, handleSubmit, reset, formState: { isSubmitting }} = useForm<FieldSearch>({
        values: { search: "" }
    })

    async function onSubmitSearch({search} : FieldSearch) {
        loadTransactions(search)
        reset()
    }

    return (
        <StyledSearchFormContainer onSubmit={handleSubmit(onSubmitSearch)}>
            <input 
                type="text" 
                placeholder="buscar transações"
                {...register('search')}
            />
            <StyledButtonOutlined disabled={isSubmitting}>
               <MagnifyingGlass size={20}/>  Buscar 
            </StyledButtonOutlined>
        </StyledSearchFormContainer>
    )
}