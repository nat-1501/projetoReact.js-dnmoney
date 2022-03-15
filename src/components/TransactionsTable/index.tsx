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
                        <td>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/08/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/08/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/08/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>  
    );
}