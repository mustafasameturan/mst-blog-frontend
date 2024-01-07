import { createBrowserRouter } from "react-router-dom";
import WebLayout from "~/layouts/web";
import Home from "~/pages/ui/home";
import Blog from "~/pages/ui/blog/index.jsx";
import Uses from "~/pages/ui/uses/index.jsx";
import Contact from "~/pages/ui/contact/index.jsx";
import Post from "~/pages/ui/post/index.jsx";
import AdminLogin from "~/pages/admin/auth/admin-login/index.jsx";
import AdminLayout from "~/layouts/admin/index.jsx";
import CreatePost from "~/pages/admin/create-post/index.jsx";
import AuthRoute from "~/pages/admin/auth/auth-route/auth-route.jsx";

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
                path: 'post/:postId',
                element: <Post />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminLogin />
            },
            {
                path: "create-post",
                element: <AuthRoute><CreatePost /></AuthRoute>
            }
        ]
    }
]);

export default routes;