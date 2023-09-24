import { createBrowserRouter } from "react-router-dom";
import WebLayout from "~/layouts/web";
import Home from "~/pages/home";
import Blog from "~/pages/blog/index.jsx";
import Uses from "~/pages/uses/index.jsx";
import Contact from "~/pages/contact/index.jsx";
import Post from "~/pages/post/index.jsx";
import AdminLogin from "~/pages/auth/admin-login/index.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <WebLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'uses',
                element: <Uses />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'post',
                element: <Post />
            },
            {
                path: 'admin-login',
                element: <AdminLogin />
            }
        ]
    }
]);

export default routes;