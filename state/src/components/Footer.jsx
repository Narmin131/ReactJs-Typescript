import React, { Component } from 'react'
import logo from "../assets/img/logo.png"
class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-lg-3">
<img src={logo} alt="" width='50%' />
<p>Aliquam facilisis nec orci et tempor. Integer facilisis vulputate nisi vitae tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
<i class="fa-brands fa-facebook-f icon"></i>
<i class="fa-brands fa-instagram icon"></i>
<i class="fa-brands fa-google-plus icon"></i>
<i class="fa-brands fa-pinterest icon"></i>
<i class="fa-brands fa-staylinked icon"></i>
<i class="fa-brands fa-linkedin icon"></i>
                  </div>
                  <div className="col-lg-3">
                      <h1>Information</h1>
                      <h5><i class="fa-solid fa-angle-right"></i>Privacy Policy</h5>
                      <h5><i class="fa-solid fa-angle-right"></i>Term Condition</h5>
                      <h5><i class="fa-solid fa-angle-right"></i>Contact</h5>
                      <h5><i class="fa-solid fa-angle-right"></i>About Us</h5>
                  </div>
                  <div className="col-lg-3">
                      <h1>My Account</h1>
                      <h5><i class="fa-solid fa-angle-right"></i>Wishlist</h5>
                      <h5><i class="fa-solid fa-angle-right"></i>My Account</h5>
                      <h5><i class="fa-solid fa-angle-right"></i>Checkout</h5>
                      <h5><i class="fa-solid fa-angle-right"></i>Cart</h5>
                      <h5><i class="fa-solid fa-angle-right"></i>Shop</h5>
                  </div>
                  <div className="col-lg-3">
                      <h1>Our Contact</h1>        
                       <h4><i class="fa-solid fa-location-dot"></i>60, 29th Street #343,  United States Of America</h4>
                       <h4><i class="fa-solid fa-phone"></i>+00-123-456-789</h4>
                       <h4><i class="fa-solid fa-square-envelope"></i>info@example.com</h4>
                  </div>
              </div>
          </div>
      </footer>
    )
  }
}

export default Footer