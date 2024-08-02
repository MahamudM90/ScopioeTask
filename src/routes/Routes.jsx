import {
    createBrowserRouter
  } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import Home from "../components/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import ErrorPage from "../components/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/signin',
        element: <SignIn></SignIn>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    }
    
  ]);

  export default router;