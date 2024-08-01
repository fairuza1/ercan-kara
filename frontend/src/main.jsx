import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.jsx'
import "./styles.scss";
import "./locales";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </BrowserRouter> eski yömtem bu buda kullanılabilr
     */}
  </React.StrictMode>
);
