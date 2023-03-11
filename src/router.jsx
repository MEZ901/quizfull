import { Navigate, createBrowserRouter } from "react-router-dom"
import Root from "./views/Root";
import Index from './views/Index';
import PageNotFound from "./views/PageNotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
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