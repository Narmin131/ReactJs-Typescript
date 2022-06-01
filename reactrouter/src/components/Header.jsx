import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import img from "../assets/img/logo.png"
class Header extends Component {
  render() {
    return (
      <header>
          <div className="container h-100">
              <div className="row h-100">
                  <div className="col-lg-4 h-100">
                   <div className="left-links">
                   <NavLink to="/">Home</NavLink>
                   <NavLink to="/about">About</NavLink>
                   <NavLink to="/contact">Contact</NavLink>
                   <p>Our Menu</p>
                   </div>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-center align-items-center">
<div className="imgg">
<img src={img} alt="" />
</div>
                  </div>
                  <div className="col-lg-4 h-100">
                  <div className="right-links">
                   <p>Pages</p>
                   <p>Blog</p>
                   <p>Shop</p>
                   <p>Our Cakes</p>
                   </div>
                  </div>
              </div>
          </div>
      </header>
    )
  }
}

export default Header