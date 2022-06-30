import React from 'react'
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AppRouter from './router/AppRouter'
import configureStore from "./store/store";
import { addBlog,editBlog,removeBlog } from "./actions/action";
import { Provider } from "react-redux";
const store = configureStore();



// const blog1 = store.dispatch(addBlog({basliq:"Applein yeni m2 prosessoru", aciqlama:"qiymeti 3000$"}));
// const blog2 = store.dispatch(addBlog({basliq:"Asus un yeni rog seriyasi", aciqlama:"qiymeti 4000$"}));
// console.log(blog1.blog.id);
// store.dispatch(removeBlog({id:blog1.blog.id}))
// store.dispatch(editBlog(blog2.blog.id,{title:"update"}))
// store.dispatch(addBlog({basliq:"Acer un yeni rog seriyasi", aciqlama:"qiymeti 14000$"})); 

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