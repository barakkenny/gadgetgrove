import React, {Suspense} from 'react'
import './App.css'
import Products from "./components/Products.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './components/Login.jsx';


const Body = React.lazy(()=> import("./components/Body"));
const ProductDetails = React.lazy(()=> import("./components/products-details/ProductDetails"))
const Cart = React.lazy(()=> import('./components/Cart'))

const appRouter = createBrowserRouter([
  
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/products/:productId",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ProductDetails />
            </Suspense>
        ),
      
    errorElement: <ErrorPage />
  },
]);


function App() {
  return (
    <section className='app__container'>
      <RouterProvider router={appRouter} />
    </section>
  )
}

export default App