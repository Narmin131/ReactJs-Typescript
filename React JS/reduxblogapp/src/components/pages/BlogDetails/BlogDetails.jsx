import React from 'react'
import { connect } from 'react-redux'
import BlogDetailsItem from './BlogDetailsItem'

const BlogDetails = props => {
    return (
        <div>
            <BlogDetailsItem {...props.deyer}/>
        </div>
    )
}
const mapStateToProps = (state, props) => {
    return {
        deyer: state.item.find((q) => {
            return q.id === props.match.params.id
        })
    }
}


export default connect(mapStateToProps)(BlogDetails)