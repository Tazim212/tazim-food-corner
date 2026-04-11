import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../Home/Home";
import AllFoods from "../AllFoods/AllFoods";

const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: App,
            children: [
                {
                    path: '/',
                    Component: Home,
                    loader: ()=>fetch('foods.json')
                },
                {
                    path: 'menulist',
                    Component: AllFoods
                },
                // {
                //     path: '/',
                //     Component: Home
                // },
                // {
                //     path: '/',
                //     Component: Home
                // },
            ]
        }
    ]
)
export default router;