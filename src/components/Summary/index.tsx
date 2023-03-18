import { TrendDown, TrendUp, CurrencyDollarSimple } from 'phosphor-react';
import useSummary from '../../hooks/useSummary';
import { formatterNumber } from '../../utils/formatter';
import { 
    StyledSummaryContainer, 
    StyledSummaryExpenseCard, 
    StyledSummaryPerformanceCard,
    StyledSummaryBalanceCard } from './styles';

export default function Summary() {
    const summary = useSummary()
    return (
        <StyledSummaryContainer>
            <StyledSummaryPerformanceCard>
                <header>
                    <span>Receitas</span>
                    <TrendUp size={32} />
                </header>
                <strong>
                    {formatterNumber.format(summary.performance)}
                </strong>
            </StyledSummaryPerformanceCard>
            <StyledSummaryExpenseCard>
                <header>
                    <span>Despesas</span>
                    <TrendDown size={32} />
                </header>
                <strong>
                    {formatterNumber.format(summary.expense)}
                </strong>
            </StyledSummaryExpenseCard>
            <StyledSummaryBalanceCard>
                <header>
                    <span>Total</span>
                    <CurrencyDollarSimple size={32} />
                </header>
                <strong>
                    {formatterNumber.format(summary.balance)}
                </strong>
            </StyledSummaryBalanceCard>
        </StyledSummaryContainer>
    )
}