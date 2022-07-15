import React from 'react'
import BlogItem from './BlogItem'
import { useContext } from 'react'
import { BlogContext } from '../context/BlogContext'

 const Blogs = () => {
  const [blogs,setBlogs] = useContext(BlogContext);
  return (
    <>
    <div className="blogs">
    <div className="container">
      <div className="row">
        {blogs.map(data=>(
          <BlogItem title={data.title} desc={data.desc} key={data.id} url={data.url}/>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default Blogs