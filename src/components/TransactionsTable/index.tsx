import { response } from "express";
import { useEffect } from "react";
import { Container } from "./styles"

export function TransactionTable() {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
        .then(response => response.json())
        .then(data => console.log(data))
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
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/08/2022</td>
                    </tr>
                    <tr>
                        <td>Casa</td>
                        <td className="withdraw">-R$500.00</td>
                        <td>Aluguel</td>
                        <td>20/08/2022</td>
                    </tr>
                    <tr>
                        <td>Shopping</td>
                        <td className="withdraw">-R$1.000</td>
                        <td>Roupas e sapatos</td>
                        <td>20/08/2022</td>
                    </tr>
                    <tr>
                        <td>Contas</td>
                        <td className="withdraw">-R$600.00</td>
                        <td>Cartão</td>
                        <td>20/08/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>  
    );
}