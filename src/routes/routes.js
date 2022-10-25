import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/home',
                element: <Home/>
            },
            {
                path:'/courses',
                element: <Courses/>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            }

        ]
    }
])