import { createBrowserRouter } from "react-router-dom";
import WebLayout from "~/layouts/web";
import Home from "~/pages/home";
import Blog from "~/pages/blog/index.jsx";

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
                path: 'ana-sayfa',
                element: <Home />
            },
            {
                path: 'blog',
                element: <Blog />
            }
        ]
    }
]);

export default routes;