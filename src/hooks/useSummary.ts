import { useContext } from "react";
import { ContextTransactions } from "../contexts/ContextTransactionsProvider";

interface SummaryValues {
    performance: number;
    expense: number;
    balance: number;
}

export default function useSummary() : SummaryValues {
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

    return summary;
}