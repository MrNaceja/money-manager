import { ReactNode, useEffect, useState, createContext } from 'react';

export enum EnumTransactionType {
  performance = 'performance',
  expense = 'expense'
}

interface Transaction {
    id: number;
    name: string;
    value: number;
    category: string;
    type: EnumTransactionType;
    insertAt: string;
}

interface PropsContextTransactions {
    transactions: Transaction[];
}

export const ContextTransactions = createContext({} as PropsContextTransactions)

interface PropsContextTransactionsProvider {
    children: ReactNode;
}
export default function ContextTransactionsProvider({ children } : PropsContextTransactionsProvider) {
    const URL_API_BACK_END_GET_TRANSACTIONS = 'http://localhost:3000/transactions';

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    async function loadTransactions() {
      const res = await fetch(URL_API_BACK_END_GET_TRANSACTIONS)
      const transactions = await res.json()
      setTransactions(transactions)
    }

    useEffect(() => { loadTransactions() }, [])
    
    return (
      <ContextTransactions.Provider value={{ transactions: transactions }}>
        { children }
      </ContextTransactions.Provider>
    )
}