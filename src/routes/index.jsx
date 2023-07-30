import { createBrowserRouter } from "react-router-dom";
import WebLayout from "~/layouts/web";
import Home from "~/pages/home";

const routes = createBrowserRouter([
    {
        path: '/home',
        element: <WebLayout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]);

export default routes;