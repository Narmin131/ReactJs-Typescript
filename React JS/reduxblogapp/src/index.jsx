import React from 'react'
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './router/AppRouter'
import configureStore from "./store/store";
import { addBlog, editBlog, removeBlog } from "./actions/action";
import { Provider } from "react-redux";
const store = configureStore();


store.subscribe(() => {
  console.log(store.getState());
});

const App = () => {
  return (
    <div>index</div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>

  </React.StrictMode>
)
export default App