import { Navigate, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout";
import Index from './views/Index';
import PageNotFound from "./views/PageNotFound";
import ErrorPage from "./views/errorPage";
import QuizLayout from "./layouts/QuizLayout";
import Info from "./views/Info";
import Questions, { questionsLoader } from "./views/Questions";
import Result from "./views/Result";

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
                element: <Index />,
                errorElement: <ErrorPage />
            },
            {
                path: 'quiz',
                element: <QuizLayout />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: '',
                        element: <Navigate to='info' />
                    },
                    {
                        path: 'info',
                        element: <Info />,
                        errorElement: <ErrorPage />
                    },
                    {
                        path: 'questions',
                        element: <Questions />,
                        errorElement: <ErrorPage />,
                        loader: questionsLoader,
                    },
                    {
                        path: 'result',
                        element: <Result />,
                        errorElement: <ErrorPage />
                    }
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