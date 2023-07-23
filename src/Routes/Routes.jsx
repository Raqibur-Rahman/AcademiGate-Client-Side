import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllColleges from "../pages/AllColleges/AllColleges";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,
            {
                path: '/colleges',
                element: <AllColleges></AllColleges>
            }
            ,
            {
                path: '/login',
                element: <Login></Login>
            }
            ,
            {
                path: '/signup',
                element:<SignUp></SignUp>
            }
        ]

    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

]);

