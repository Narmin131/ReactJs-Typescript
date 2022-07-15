import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import Nav from "../components/Nav"
import Home from "../components/pages/Home"
import Blogs from "../components/pages/Blogs"
import BlogDetails from '../components/pages/BlogDetails/BlogDetails'
import AddBlogPage from "../components/pages/AddEditRemove/AddBlogPage"
import EditBlogPage from "../components/pages/AddEditRemove/EditBlogPage"
import Dashboard from '../components/pages/Dashboard/Dashboard'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" exact component={Home}></Route>
      <Route path="/blogs"  component={Blogs}></Route>
      <Route path="/blog/:id" component={BlogDetails}></Route>
      <Route path="/addblog" component={AddBlogPage}></Route>
        <Route path="/edit/:id" component={EditBlogPage}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
    </BrowserRouter>
  )
}

export default AppRouter