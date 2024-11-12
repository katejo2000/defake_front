import {BrowserRouter, useRoutes} from 'react-router-dom';
import MainPage from "../pages/MainPage.tsx";
import ResultPage from "../pages/ResultPage.tsx";
import LoadingPage from '../pages/LoadingPage.tsx';
import ErrorPage from "../pages/ErrorPage.tsx";


export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <MainPage />,
        },
        {
            path: '/loading',
            element: <LoadingPage />,
        },
        {
            path: '/result',
            element: <ResultPage />,
        },
        {
            path: '/error',
            element: <ErrorPage />,
        },
    ]);
}   

export function AppRouter() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}