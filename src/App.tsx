import './App.css'
import { AppRouter } from './routes/index.tsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    )
}

export default App
