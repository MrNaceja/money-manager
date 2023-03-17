import Header from "../../components/Header";
import Summary from "../../components/Summary";
import SearchForm from '../../components/SearchForm/index';
import { useEffect, useState, useContext } from 'react';
import { ContextTransactions } from '../../contexts/ContextTransactionsProvider';
import { formatterNumber, formatterDate } from '../../utils/formatter';
import { 
  StyledTransactionsContainer, 
  StyledTransactionsTable,
  StyledHighlightValuePerformance,
  StyledHighlightValueExpense } from "./styles";

export default function Dashboard() {
    const { transactions } = useContext(ContextTransactions)
    return (
       <>
        <Header />
        <Summary />
        <StyledTransactionsContainer>
          <SearchForm />
          <StyledTransactionsTable>
            <tbody>
              {
                transactions.map(transaction => {
                 return (
                    <tr key={transaction.id}>
                      <td>{transaction.name}</td>
                      <td>
                        {
                          transaction.type == 'performance' &&
                            <StyledHighlightValuePerformance>
                              {formatterNumber.format(transaction.value)}
                            </StyledHighlightValuePerformance>
                        }
                        {
                          transaction.type == 'expense' &&
                            <StyledHighlightValueExpense>
                              {formatterNumber.format(transaction.value)}
                            </StyledHighlightValueExpense>
                        }
                        </td>
                      <td>{transaction.category}</td>
                      <td>{formatterDate.format(new Date(transaction.insertAt))}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </StyledTransactionsTable>
        </StyledTransactionsContainer>
       </>
    )
}