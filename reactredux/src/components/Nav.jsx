import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul className='d-flex '>
            <li><Link className='mx-5' to="/">Home</Link></li>
            <li><Link className='mx-5' to="/blog">Blog</Link></li>
        </ul>
    </div>
  )
}

export default Nav