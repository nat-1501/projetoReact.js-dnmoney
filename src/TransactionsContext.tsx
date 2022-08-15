import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}


export const TransactionsContext = createContext<transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []); 

    function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction) 
    }

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    );
}