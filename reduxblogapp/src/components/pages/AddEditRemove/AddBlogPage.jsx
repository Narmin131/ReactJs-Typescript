import React from 'react'
import { connect } from 'react-redux'
import { addBlog } from '../../../actions/action'
import BlogForm from './BlogForm'

const AddBlogPage = props => {
  return (
    <div>
        <h3 className='text-center'>Add Blog Page</h3>
        <BlogForm onFormSubmit={(gelenblog)=>{
            props.dispatch(addBlog(gelenblog));
            props.history.push('/blog');
        }} /></div>
  )
}

export default connect()(AddBlogPage)