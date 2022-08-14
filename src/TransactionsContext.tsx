import { createContext, useEffect, useState } from 'react'
import { api } from './services/api';

interface transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}


export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []); 

    return (
        <TransactionsContext.Provider value={transactions}>

        </TransactionsContext.Provider>
    );
}