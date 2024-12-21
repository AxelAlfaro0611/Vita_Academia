import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Index from "./pages/Index";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Index/>
            },
        ],
    },
]);

export default router