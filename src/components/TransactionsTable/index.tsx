import { Container } from "./styles"

export function TransactionTable() {
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