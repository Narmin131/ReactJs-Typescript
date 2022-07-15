import React from 'react'
import { connect } from 'react-redux'
import { editBlog, removeBlog } from '../../../actions/action'
import BlogForm from './BlogForm'

const EditBlogPage = props => {
  return (
    <div className='container p-0 '>
        <h3 className='text-center'>Edit Blog</h3>
        <BlogForm editBlog={props.deyer}
        onFormSubmit={(a)=>{
            props.dispatch(editBlog(props.deyer.id,a));
            props.history.push('/dashboard');
        }}/>
        <button className='btn btn-danger mt-3' style={{marginLeft:"10px"}}
        onClick={()=>{
            props.dispatch(removeBlog({id:props.deyer.id}))
            props.history.push('/dashboard');
        }}
           >Delete</button>
    </div>
  )
}

const mapStateToProps=(state,props)=>{
    return{
        deyer:state.item.find((b)=>{
            return b.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage)