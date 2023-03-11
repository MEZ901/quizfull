import { Navigate, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout";
import Index from './views/Index';
import PageNotFound from "./views/PageNotFound";

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
                path: '/home',
                element: <Index />
            },
            {
                path: '/quiz',
                element: <Index />
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    },
]);

export default router;