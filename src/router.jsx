import { Navigate, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout";
import Index from './views/Index';
import PageNotFound from "./views/PageNotFound";
import QuizLayout from "./layouts/QuizLayout";
import Info from "./views/Info";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to='/home' />
            },
            {
                path: 'home',
                element: <Index />
            },
            {
                path: 'quiz',
                element: <QuizLayout />,
                children: [
                    {
                        path: '',
                        element: <Navigate to='info' />
                    },
                    {
                        path: 'info',
                        element: <Info />
                    },
                ]
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    },
]);

export default router;