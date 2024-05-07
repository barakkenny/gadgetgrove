import React from 'react'
import Header from './components/Header'
import './App.css'
import Body from './components/Body';
// import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

function App() {
  
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export default App

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   }

// ])