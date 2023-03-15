import { StyledButtonOutlined } from "../../styles/Button";
import { StyledSearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'

export default function SearchForm() {
    return (
        <StyledSearchFormContainer>
            <input type="text" placeholder="buscar transações"/>
            <StyledButtonOutlined>
               <MagnifyingGlass size={20}/>  Buscar 
            </StyledButtonOutlined>
        </StyledSearchFormContainer>
    )
}