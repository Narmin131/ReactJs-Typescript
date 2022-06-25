import React from 'react'
import { connect } from 'react-redux'
// import BlogList from './BlogList'
import BlogItem from '../pages/BlogItem'

const BlogPage = (props) => {
  return (
    <ol>
      {props.deyer.map(senan=>{
        return <BlogItem {...senan}/>
      })}
    </ol>
  )
}
const mapStateToProps = (state)=>{
  return{
    deyer: state.item
  }
}

export default connect(mapStateToProps)(BlogPage)