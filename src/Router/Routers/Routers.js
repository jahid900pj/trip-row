import { createBrowserRouter, } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Login from "../../Pages/Form/Login/Login";
import Register from "../../Pages/Form/Register/Register";
import Home from "../../Pages/Home/Home/Home";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import NotFound from "../../Pages/NotFound/NotFound";
import ServiceDetail from "../../Pages/ServiceDetails/ServiceDetail";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRouter/PrivateRouter";


const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>,

            },
            {
                path: '/services', element: <Services></Services>
            },
            {
                path: '/service/:id', element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => {
                    return fetch(`https://server-side-assigment-11.vercel.app/service/${params.id}`)
                }
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: '/MyReviews', element: <PrivateRoute> <MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addService', element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blogs', element: <Blogs></Blogs>
            }

        ]
    }
    ,
    {
        path: '*', element: <NotFound></NotFound>
    }
])

export default router