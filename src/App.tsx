import { ThemeProvider } from 'styled-components'
import ContextTransactionsProvider from './contexts/ContextTransactionsProvider'
import Dashboard from './pages/Dashboard'
import { GlobalStyle } from './styles/GlobalStyle'
import { themeDefault } from './styles/themes/themeDefault'

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <ContextTransactionsProvider>
        <Dashboard />
      </ContextTransactionsProvider>
    </ThemeProvider>
  )
}

export default App
