import { TrendDown, TrendUp, CurrencyDollarSimple } from 'phosphor-react';
import { useContext } from 'react';
import { ContextTransactions } from '../../contexts/ContextTransactionsProvider';
import { formatterNumber } from '../../utils/formatter';
import { 
    StyledSummaryContainer, 
    StyledSummaryExpenseCard, 
    StyledSummaryPerformanceCard,
    StyledSummaryBalanceCard } from './styles';

interface SummaryValues {
    performance: number;
    expense: number;
    balance: number;
}

export default function Summary() {
    const { transactions } = useContext(ContextTransactions)
    const summary : SummaryValues = transactions.reduce((prevSummary, transaction) => {
        switch (transaction.type) {
            case 'performance':
                prevSummary.performance += transaction.value
                break
                case 'expense':
                    prevSummary.expense += transaction.value
                    break
                }
                prevSummary.balance = prevSummary.performance - prevSummary.expense
                return prevSummary;
    }, {performance: 0, expense: 0, balance: 0})
    
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