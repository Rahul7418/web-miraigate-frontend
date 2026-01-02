import './App.css'
import Navbar from './components/layout/Navbar';
import Home from './pages/Home'
import Services from './pages/Services'
import Resources from './pages/Resources';
import Company from './pages/Company';
import Portfolio from './pages/Portfolio'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar /><Home /></> 
    },
    {
      path: "/services",
      element:  <><Navbar /><Services /></>
    },
    {
      path: "/resources",
      element:  <><Navbar /><Resources /></>
    },
    {
      path: "/company",
      element:  <> <Navbar /><Company /></>
    },
    {
      path: "/portfolio",
      element:  <><Navbar /><Portfolio /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
