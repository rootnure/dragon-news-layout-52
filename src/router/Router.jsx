import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/newsDetails/:newsId",
                element: <PrivateRoute><NewsDetails /></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch('/news.json');
                    const allNews = await res.json();
                    return allNews.find(news => news._id === params.newsId);
                }
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/career",
                element: <Career />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <LogIn />
            },
        ]
    }
])

export default router;