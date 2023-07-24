import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllColleges from "../pages/AllColleges/AllColleges";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import UniversityDetailsCard from "../pages/UniversityDetails/UniversityDetailsCard";
import PrivateRoute from "./PrivateRoute";
import MyCollege from "../pages/MyCollege/MyCollege";
import Admission from "../pages/Admission/Admission";



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
                element: <SignUp></SignUp>
            }, 
            {
                path: '/colleges/:id',
                element: <UniversityDetailsCard></UniversityDetailsCard>,
                loader: ({ params }) => fetch(` https://academi-gate-server-side.vercel.app/colleges/${params.id}`)

            },
            {
                path:'/mycollege',
                element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
            }
            ,
            {
                path:'/admission',
                element: <Admission></Admission>
            }
        ]

    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

]);

