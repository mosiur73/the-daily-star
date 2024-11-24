import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";


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
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"/news/:id",
        element:<PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
        
    }
])

export default router;