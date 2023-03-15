import Header from "../../components/Header";
import Summary from "../../components/Summary";
import SearchForm from '../../components/SearchForm/index';
import { 
  StyledTransactionsContainer, 
  StyledTransactionsTable,
  StyledHighlightValuePerformance,
  StyledHighlightValueExpense } from "./styles";

export default function Dashboard() {
    return (
       <>
         <Header />
        <Summary />
        <StyledTransactionsContainer>
          <SearchForm />
          <StyledTransactionsTable>
            <tbody>
                <tr>
                  <td>Receita aqui</td>
                  <td>
                    <StyledHighlightValuePerformance>
                      R$ 900,00
                    </StyledHighlightValuePerformance>
                    </td>
                  <td>Categoria aqui</td>
                  <td>14/03/2022</td>
                </tr>
                <tr>
                  <td>Despesa aqui</td>
                  <td>
                    <StyledHighlightValueExpense>
                      R$ 900,00
                    </StyledHighlightValueExpense>
                  </td>
                  <td>Categoria aqui</td>
                  <td>14/03/2022</td>
                </tr>
            </tbody>
          </StyledTransactionsTable>
        </StyledTransactionsContainer>
       </>
    )
}