import React from 'react'
import ReactDOM  from 'react-dom'
import AppRouter from "../src/routers/AppRouter"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../src/components/assets/sass/style.css"


const App = () => {
  return (
    <AppRouter/>
  )
}

ReactDOM.render(<App/>,document.querySelector("#root"))