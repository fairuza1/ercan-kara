import { createBrowserRouter} from "react-router-dom";

import { Home } from "../assets/pages/SingUp/Home";
import { SingUp } from "../assets/pages/SingUp";
import App from "../App";

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
        ]
    }
  ]);