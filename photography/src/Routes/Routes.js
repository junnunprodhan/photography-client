import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddProduct from "../pages/AddProduct/AddProduct";
import Blog from "../pages/Blog/Blog";
import MyReview from "../pages/MyReview/MyReview";
import ServicesDetails from "../pages/ServiceDetails/ServicesDetails";
import Services from "../pages/services/Services";
import ErrorPage from "../pages/sharedPage/ErrorPage/ErrorPage";
import Home from "../pages/sharedPage/Home/Home";
import Login from "../pages/sharedPage/Login/Login";
import Register from "../pages/sharedPage/Register/Register";

export const routes=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
           
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <MyReview></MyReview>
            },
            {
                path: '/addservice',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
           
            {
                path:'/services',
                element: <Services></Services>,
                loader :()=>fetch('https://photography-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({params}) => fetch(`https://photography-server.vercel.app/services/${params.id}`)
            },
           
        ]
    }
])