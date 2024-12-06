import {useRoutes} from 'react-router-dom';
import LandingPage from "../pages/LandingPage.tsx";
import MainPage from "../pages/MainPage.tsx";
import ResultPage from "../pages/ResultPage.tsx";
import LoadingPage from '../pages/LoadingPage.tsx';
import ErrorPage from "../pages/ErrorPage.tsx";

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <LandingPage/>,
        },
        {
            path: '/main',
            element: <MainPage/>,
        },
        {
            path: '/loading',
            element: <LoadingPage/>,
        },
        {
            path: '/result',
            element: <ResultPage/>,
        },
        {
            path: '/error',
            element: <ErrorPage/>,
        },
        {
            path: '/about',
            element: <MainPage/>,
        },
        {
            path: '/product',
            element: <MainPage/>,
        },
    ]);
}

export function AppRouter() {
    return <Router/>;
}