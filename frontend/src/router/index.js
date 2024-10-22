import {createBrowserRouter } from "react-router-dom";

import { Home } from "@/pages/Home";
import { SingUp } from "../pages/SingUp";
import App from "@/App";
import { Activation } from "@/pages/Activation";
import { User } from "@/pages/User";
import { Login } from "@/pages/Login";

export default  createBrowserRouter([
    {
        path: "/",
        Component: App,
        children:[
            {
                path: "/",
                index:true,
                Component: Home,
              },
              {
                path: "/signup",
                Component: SingUp,
              },
              {
                path: "/activation/:token",
                Component: Activation
              },
            {
              path: "/user/:id",
              Component :User,
            },
            {
              path:"/login",
              Component:Login,

            }
        ]
    }
  ]);