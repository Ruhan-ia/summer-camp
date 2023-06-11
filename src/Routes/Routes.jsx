import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";
import Test from "../Shared/Test/Test";
import PrivateRoute from "./PrivateRoute";

 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
        }, 
        {
          path:'/instructors',
          element:<Instructor></Instructor>
        },
        {
          path:'/test',
          
          element:<PrivateRoute><Test></Test></PrivateRoute>
        }
      ]
    },
  ]);
  