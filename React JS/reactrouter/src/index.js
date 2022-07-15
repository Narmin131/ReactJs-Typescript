import React, { Component } from 'react'
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'swiper/css/bundle';
import "../src/assets/sass/style.css"
import AppRouter from "./routers/AppRouter";

class App extends Component {
  render() {
    return (
      <>
      <AppRouter/>
      </>

    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));