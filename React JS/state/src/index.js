import React, { Component } from 'react';
import ReactDOM from "react-dom";
import '../src/assets/sass/style.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Cards from "../src/components/Cards";
import Header from "../src/components/Header";
import Nav from "../src/components/Nav";
import Slider from "../src/components/Slider";
import Coffees from './components/Coffees';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Nav/>
      <Slider/>
      <Cards/>
      <Coffees/>
      <Footer/>
      </>
    )
  }
}


ReactDOM.render(<App/>,document.querySelector("#root"));
