import React from 'react'
import { BrowserRouter,Route } from "react-router-dom"; 
import { CartProvider } from "react-use-cart";
import Shop from "../pages/Shop"
import Home from "../pages/Home"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Route path="/" exact  component={Home}></Route>
    <Route path="/shop"  component={Shop}></Route>
    
    </BrowserRouter>
  )
}

export default AppRouter