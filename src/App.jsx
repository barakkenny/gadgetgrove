import React, { Suspense } from "react";
import "./App.css";
import ErrorPage from "./components/ErrorPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import { motion } from "framer-motion";

const Body = React.lazy(() => import("./components/Body"));
const Products = React.lazy(() => import("./components/Products"));
const ProductDetails = React.lazy(() =>
  import("./components/products-details/ProductDetails")
);
const Cart = React.lazy(() => import("./components/Cart"));
const SamsungTvDetails = React.lazy(() =>
  import("./components/products-details/SamsungTvDetails")
);
const BuyNow = React.lazy(() => import("./components/BuyNow"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="h-screen flex items-center justify-center space-x-2">
        {[...Array(3)].map((_, index) => (
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 0.6,
              erase: "easeInOut",
              repeat: Infinity,
              repeatDelay: index * 0.2,
            }}
            key={index}
            className="w-4 h-4 bg-teal-500 rounded-full"
          />
        ))}
      </div>}>
        <Body />
      </Suspense>
    ),
  },
  {
    path: "/products",
    element: (
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center space-x-2">
            {[...Array(3)].map((_, index) => (
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 0.6,
                  erase: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: index * 0.2,
                }}
                key={index}
                className="w-4 h-4 bg-teal-500 rounded-full"
              />
            ))}
          </div>
        }
      >
        <Products />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div className="h-screen flex items-center justify-center space-x-2">
        {[...Array(3)].map((_, index) => (
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 0.6,
              erase: "easeInOut",
              repeat: Infinity,
              repeatDelay: index * 0.2,
            }}
            key={index}
            className="w-4 h-4 bg-teal-500 rounded-full"
          />
        ))}
      </div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<div className="h-screen flex items-center justify-center space-x-2">
        {[...Array(3)].map((_, index) => (
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 0.6,
              erase: "easeInOut",
              repeat: Infinity,
              repeatDelay: index * 0.2,
            }}
            key={index}
            className="w-4 h-4 bg-teal-500 rounded-full"
          />
        ))}
      </div>}>
        <Cart />
      </Suspense>
    ),
  },
  {
    path: "/buy-now",
    element: (
      <Suspense fallback={<div className="h-screen flex items-center justify-center space-x-2">
        {[...Array(3)].map((_, index) => (
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 0.6,
              erase: "easeInOut",
              repeat: Infinity,
              repeatDelay: index * 0.2,
            }}
            key={index}
            className="w-4 h-4 bg-teal-500 rounded-full"
          />
        ))}
      </div>}>
        <BuyNow />
      </Suspense>
    ),
  },
  {
    path: "/products/:productId",
    element: (
      <Suspense fallback={<div className="h-screen flex items-center justify-center space-x-2">
        {[...Array(3)].map((_, index) => (
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 0.6,
              erase: "easeInOut",
              repeat: Infinity,
              repeatDelay: index * 0.2,
            }}
            key={index}
            className="w-4 h-4 bg-teal-500 rounded-full"
          />
        ))}
      </div>}>
        <ProductDetails />
      </Suspense>
    ),

    errorElement: <ErrorPage />,
  },
  {
    path: "/samsung-tv/:productId",
    element: (
      <Suspense fallback={<div className="h-screen flex items-center justify-center space-x-2">
        {[...Array(3)].map((_, index) => (
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 0.6,
              erase: "easeInOut",
              repeat: Infinity,
              repeatDelay: index * 0.2,
            }}
            key={index}
            className="w-4 h-4 bg-teal-500 rounded-full"
          />
        ))}
      </div>}>
        <SamsungTvDetails />
      </Suspense>
    ),

    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <section className="app__container">
      <RouterProvider router={appRouter} />
    </section>
  );
}

export default App;
