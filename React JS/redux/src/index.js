import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { v4 as uuidv4 } from 'uuid';

// Action Start
const addBlog = ({basliq,aciqlama})=>({
  type:"ADD_BLOG",
  blog: {
    id: uuidv4(),
    title: basliq,
    desc: aciqlama
  }
})
// Action End




//Blog Reducer Start
const blogState = [];
const blogReducer = (state = blogState, action)=>{
  switch(action.type){
    case "ADD_BLOG":
      return[
        ...state,
        action.blog
      ]
      
      default:
        return state;
  }
}
//Blog Reducer End




// Store Start
const store = createStore(
    combineReducers({
      meqale: blogReducer,
    })
)
// Store End



// dispatch Start
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(addBlog({basliq:"Salam", aciqlama:"Necesen"}))
store.dispatch(addBlog({basliq:"Salam1", aciqlama:"Necesen1"}))

// dispatch End








const App = () => {
  return (
    <h1>BlogApp</h1>
  )
}



ReactDOM.render(<App/>,document.querySelector("#root"))