import React, { Component } from 'react'

 class Nav extends Component {
  render() {
    return (
      <nav>
          <div className="container-fluid h-100">
              <div className="row h-100 d-flex justify-content-between">
                  <div className="col-lg-6 h-100">
                      <ul>
                          <li><a href="">Home</a></li>
                          <li><a href="">Shop</a></li>
                          <li><a href="">Pages</a></li>
                          <li><a href="">About Us</a></li>
                          <li><a href="">Contact</a></li>
                          <li><a href="">Blog</a></li>
                      </ul>
                  </div>
                  <div className="col-lg-3 d-flex justify-content-end align-items-center">
                      <button>Dark</button>
                      <button>Light</button>
                  </div>
              </div>
          </div>
      </nav>
    )
  }
}

export default Nav