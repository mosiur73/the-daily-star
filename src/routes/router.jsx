import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";


const router =createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
             path:"/",
             element:<Navigate to={"/categori/01"}></Navigate>
            },
            {
                path:"/categori/:id",
                element:<CategoryNews></CategoryNews>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:"/news",
        element:<>News layout</>
    },
    {
        path:"/auth",
        element:<h2>Login</h2>
    }
])

export default router;