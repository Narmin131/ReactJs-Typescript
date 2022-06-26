import React from 'react'
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './router/AppRouter'

const App = () => {
  return (
    <div>index</div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <AppRouter/>
    </React.StrictMode>
)
export default App