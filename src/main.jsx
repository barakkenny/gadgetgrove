import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Products from "./components/Products.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import ProductDetails from "./components/products/ProductDetails.jsx";
import Body from "./components/Body.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/products/:productId",
        element: <ProductDetails />
      }
    ],
    errorElement: <ErrorPage />
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
