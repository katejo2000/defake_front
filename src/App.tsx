import './App.css'
import {AppRouter} from './routes/index.tsx';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import NavBar from './components/widgets/NavBar';
import {BrowserRouter} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function AppContent() {
    const isLandingPage = useLocation().pathname === '/';
    return (
        <>
            <NavBar transparent={isLandingPage}/>
            <AppRouter/>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AppContent/>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
