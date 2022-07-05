import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {BlogContext} from "../context/BlogContext"


const Addblog = props => {

  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [blogs,setBlogs] = useContext(BlogContext);

   const updateTitle = (e) =>{
    setTitle(e.target.value);
   }

   const updateDesc = (e) =>{
    setDesc(e.target.value);
   }

   const addBlog = (e) =>{
     e.preventDefault();
     setBlogs(prevBlogs=>[...prevBlogs,{title:title,desc:desc}]);
     props.history.push("/blogs")
   }
 

  return (
    <>
  <div className="add-form">
       <div className="container">
         <div className="row d-flex justify-content-center">
          <div className="col-lg-12 d-flex justify-content-center">
            <h1>Add a blog</h1>
          </div>
          <div className="col-lg-6">
          <form onSubmit={addBlog}>
          <label  className="form-label">Add Title</label>
            <input type="text" onChange={updateTitle} value={title} />
            <label  className="form-label">Add Description</label>
            <input type="text" onChange={updateDesc} value={desc}/>
            <button>Add</button>
          </form>
          </div>
         </div>
       </div>
  </div>
   
    </>
  )
}

export default Addblog