import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Nav from "../components/Nav"
import Home from "../components/pages/Home"
import Blogs from "../components/pages/Blogs"
import AddBlogPage from "../components/pages/AddEditRemove/AddBlogPage"
import BlogDetails from '../components/pages/BlogDetails/BlogDetails'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" exact component={Home}></Route>
      <Route path="/blogs"  component={Blogs}></Route>
      <Route path="/blog/:id" component={BlogDetails}></Route>
      <Route path="/addblog" component={AddBlogPage}></Route>
    </BrowserRouter>
  )
}

export default AppRouter