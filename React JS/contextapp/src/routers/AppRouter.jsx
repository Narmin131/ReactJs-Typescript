import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Addblog from "../components/pages/Addblog"
import Home from "../components/pages/Home"
import Blogs from "../components/pages/Blogs"
import {BlogProvider} from "../components/context/BlogContext"

const AppRouter = () => {
  return (
    <>
    <BlogProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blogs" component={Blogs}></Route>
          <Route path="/addblog" component={Addblog}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      </BlogProvider>
    </>
  )
}

export default AppRouter