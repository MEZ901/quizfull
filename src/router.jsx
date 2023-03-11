import { Navigate, createBrowserRouter } from "react-router-dom"
import DefaultLayout from "./views/DefaultLayout";
import Index from './views/Index';
import PageNotFound from "./views/PageNotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/home' />
            },
            {
                path: '/home',
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