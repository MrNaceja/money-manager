import { ThemeProvider } from 'styled-components'
import Dashboard from './pages/Dashboard'
import { GlobalStyle } from './styles/GlobalStyle'
import { themeDefault } from './styles/themes/themeDefault'

function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
