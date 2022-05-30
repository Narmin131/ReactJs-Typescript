import React, { Component } from 'react'
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Header from "../components/Header";

class AppRouter extends Component {
  render() {
    return (
         <BrowserRouter>
         <Nav/>
         <Header/>
          <Switch>

            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>

          </Switch>
          <Footer/>
         </BrowserRouter>
    )
  }
}

export default AppRouter