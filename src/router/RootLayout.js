import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "../Login/Login";
import { RegisterForm } from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import Store from "../store/Store";
import CartForm from "../CartProducts/Cart";

export const routers =createBrowserRouter([
    {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/shop",
        element: <Store />,
      },
      {
        path: "/cartItem",
        element: <CartForm/>,
      },
      {
        path:"/",
        element:<Dashboard/>,
        
      },

])