import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./assets/sass/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Faq/>
        <Cards />
        <Footer/>
      </>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));