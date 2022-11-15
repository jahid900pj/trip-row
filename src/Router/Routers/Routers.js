import { createBrowserRouter, } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetail from "../../Pages/ServiceDetails/ServiceDetail";
import Services from "../../Pages/Services/Services";


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
                    return fetch(`http://localhost:5000/service/${params.id}`)
                }
            }

        ]
    }
])

export default router