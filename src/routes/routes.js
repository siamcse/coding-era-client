import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/courses',
                element: <Courses />,
                loader: () => fetch('https://coding-era-server-siamcse.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <CourseDetails />,
                loader: ({ params }) => fetch(`https://coding-era-server-siamcse.vercel.app/course/${params.id}`)
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoutes><CheckOut /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://coding-era-server-siamcse.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/faq',
                element: <Faq/>
            }

        ]
    }
])