import styled from 'styled-components';

export const StyledTransactionsContainer = styled.main`
    width:100%;
    max-width: 1100px;
    margin: 3rem auto 0;
    #no-transactions {
        color: ${props => props.theme['gray-400']};
        text-align: center;
        margin-top: 3rem;
    }
`

export const StyledTransactionsTable = styled.table`
    border-collapse: separate;
    border-spacing: 0 .5rem;
    width: 100%;
    color: ${props => props.theme['gray-300']};
    margin-top: 1rem;
    overflow-y: scroll;
    max-height: 250px;  
    display: block;
    tbody {
        display: table;
        width: 100%;
        padding-right: 1rem;
    }
    td {
        padding:.75rem;
        background: ${prosp => prosp.theme['gray-700']};
        &:first-child {
            width: 50%;
            border-radius: 5px 0 0 5px;
        }
        &:last-child {
            border-radius: 0 5px 5px 0;
            font-size:.7rem;
        }
    }
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        background: ${props => props.theme['gray-700']};
        border-radius:5px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme['gray-500']};
        border-radius:5px;
    }
`

export const StyledHighlightValuePerformance = styled.span`
    color: ${props=>props.theme['green-500']}
`
export const StyledHighlightValueExpense = styled.span`
    color: ${props=>props.theme['red-500']}
`