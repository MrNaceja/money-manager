import { StyledButtonOutlined } from "../../styles/Button";
import { StyledSearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form';

interface FieldSearch {
    search: string
}

export default function SearchForm() {

    const { register, handleSubmit, reset, formState: { isSubmitting }} = useForm<FieldSearch>({
        values: { search: "" }
    })

    async function onSubmitSearch(search : FieldSearch) {
        await new Promise(res => setTimeout(res, 2000))
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