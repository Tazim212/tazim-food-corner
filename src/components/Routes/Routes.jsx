import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../Home/Home";
import AllFoods from "../AllFoods/AllFoods";
import SignIn from "../../Pages/SignIn/SignIn";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import OrderList from "../OrderList/OrderList";

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
                {
                    path: '/login',
                    Component: SignIn
                },
                {
                    path: '/register',
                    Component: Register
                },
                {
                    path: '/dashboard',
                    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
                },
                {
                    path: '/orderedlist',
                    element: <PrivateRoute><OrderList></OrderList></PrivateRoute>
                },
            ]
        }
    ]
)
export default router;