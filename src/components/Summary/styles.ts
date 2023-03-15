import styled from "styled-components";

export const StyledSummaryContainer = styled.section`
    width:100%;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -5rem;
`

const StyledSummaryCard = styled.div`
    padding: 2rem;
    border-radius: 5px;
    background: ${props => props.theme["gray-700"]};
    box-shadow: 0 25px 20px -20px ${props => props.theme["gray-900"]};
    header {
        display: flex;
        align-items:center;
        justify-content: space-between;
    }

    strong {
        font-size: 2rem
    }
`
export const StyledSummaryBalanceCard = styled(StyledSummaryCard)`
    header {
        color: ${props => props.theme["gray-300"]};
    }
`
export const StyledSummaryPerformanceCard = styled(StyledSummaryCard)`
    header {
        color: ${props => props.theme["green-500"]};
    }
`
export const StyledSummaryExpenseCard = styled(StyledSummaryCard)`
    header {
        color: ${props => props.theme["red-500"]};
    }
`