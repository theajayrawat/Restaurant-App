import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter=createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element:<Body/>,
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path: "/cart",
        element:<Cart/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ]
  },
  
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);