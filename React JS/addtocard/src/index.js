import React from 'react';
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../src/assets/sass/style.css"
import AppRouter from "./components/Routers/AppRouter";
const App =()=>{
return(
  <>
   <AppRouter />
  </>
)
}


ReactDOM.render(<App />, document.querySelector("#root"));