import { response } from "express";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles"

export function TransactionTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data))
    }, []);

    return (
      <Container>    
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>    
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                    <tr>
                        <td>{transaction.title}</td>
                        <td className="deposit">{transaction.amount}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </Container>  
    );
}