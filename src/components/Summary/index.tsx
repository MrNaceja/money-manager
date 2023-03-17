import { TrendDown, TrendUp, CurrencyDollarSimple } from 'phosphor-react';
import { 
    StyledSummaryContainer, 
    StyledSummaryExpenseCard, 
    StyledSummaryPerformanceCard,
    StyledSummaryBalanceCard } from './styles';

export default function Summary() {
    return (
        <StyledSummaryContainer>
            <StyledSummaryPerformanceCard>
                <header>
                    <span>Receitas</span>
                    <TrendUp size={32} />
                </header>
                <strong>R$ 17.400,89</strong>
            </StyledSummaryPerformanceCard>
            <StyledSummaryExpenseCard>
                <header>
                    <span>Despesas</span>
                    <TrendDown size={32} />
                </header>
                <strong>R$ 17.400,89</strong>
            </StyledSummaryExpenseCard>
            <StyledSummaryBalanceCard>
                <header>
                    <span>Total</span>
                    <CurrencyDollarSimple size={32} />
                </header>
                <strong>R$ 17.400,89</strong>
            </StyledSummaryBalanceCard>
        </StyledSummaryContainer>
    )
}