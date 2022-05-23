import React, { Component } from 'react'
import logo from "../assets/img/logo.png"
class Header extends Component {
  render() {
    return (
      <header>
          <div className="container h-100">
              <div className="row h-100">
                  <div className="col-lg-4 d-flex flex-row justify-content-start align-items-center">
<p><i class="fa-solid fa-location-dot"></i>Are You Looking For A Best Deal?</p>
                  </div>
                  <div className="col-lg-4 h-100 d-flex flex-column justify-content-center align-items-center borderr">
<img src={logo} width="60%" height="74%" />
                  </div>
                  <div className="col-lg-4 d-flex flex-row justify-content-center align-items-center">
<h5>My Account<i class="fa-solid fa-angle-down"></i></h5>
<h5>English<i class="fa-solid fa-angle-down"></i></h5>
<h6>USD <i class="fa-solid fa-angle-down"></i></h6>
                  </div>
              </div>
          </div>
      </header>
    )
  }
}

export default Header