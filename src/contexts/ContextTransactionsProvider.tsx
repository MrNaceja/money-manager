import { ReactNode, useEffect, useState, createContext } from 'react';
import { api } from '../utils/api';

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
    loadTransactions: (queryFilter?: string) => void;
    createNewTransaction: (newTransaction : Partial<Transaction>) => void
}

export const ContextTransactions = createContext({} as PropsContextTransactions)

interface PropsContextTransactionsProvider {
    children: ReactNode;
}
export default function ContextTransactionsProvider({ children } : PropsContextTransactionsProvider) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions(queryFilter?: string) {
      const res = await api.get('transactions', {
        params: { q: queryFilter, _sort: 'insertAt', _order: 'asc' }
      })
      const transactions = res.data
      setTransactions(transactions)
    }

    async function createTransaction(newTransaction : Partial<Transaction>) {
      const createdTransaction = (await api.post('/transactions', newTransaction)).data
      setTransactions(lastTransactions => [createdTransaction, ...lastTransactions])
    }

    useEffect(() => { loadTransactions() }, [])
    
    return (
      <ContextTransactions.Provider value={
        { transactions, loadTransactions, createNewTransaction: createTransaction }
      }>
        { children }
      </ContextTransactions.Provider>
    )
}