import React from 'react';
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../src/assets/sass/style.css"
import Nav from "./components/Nav"
import Products from "./components/Products"
const App =()=>{
return(
  <>
   <Nav/>
   <Products/>
  </>
)
}


ReactDOM.render(<App />, document.querySelector("#root"));
