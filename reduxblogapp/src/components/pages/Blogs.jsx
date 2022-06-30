import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogItem'

const Blogs = (props) => {
  return (
    <div className="container pt-3">
    <div className='row'>
      {props.deyer.map(senan=>{
        return <BlogListItem key={senan.id} {...senan}/>
      })}
    </div>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    deyer: state.item
  }
}

export default connect(mapStateToProps)(Blogs)