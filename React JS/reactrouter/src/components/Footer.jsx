import React, { Component } from 'react'
import logo from "../assets/img/footer-logo.png"
export class Footer extends Component {
  render() {
    return (
     
      <footer>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-3">
<img src={logo} alt="" />
<h4>At vero eos et accusamus et iusto odio dignissimos ducimus qui bland itiis praesentium voluptatum deleniti atque corrupti.</h4>
<i className="fa-brands fa-facebook"></i>
<i className="fa-brands fa-instagram"></i>
<i className="fa-brands fa-linkedin"></i>
<i className="fa-brands fa-twitch"></i>
            </div>
            <div className="col-lg-3">
              <h3>Quick Links</h3>
              <p>Your Account</p>
              <p>View Order</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditionis</p>
            </div>
            <div className="col-lg-3">
              <h3>Work Times</h3>
              <p>Mon. : Fri.: 8 am - 8 pm</p>
              <p>Sat. : 9am - 4pm</p>
              <p>Sun. : Closed</p>

            </div>
            <div className="col-lg-3">
              <h3>Contact Info</h3>
              <p>(1800) 574 9687</p>
              <p>Justshiop Store</p>
              <p>256, baker Street,, New Youk, 5245
</p>
<p>cakebakery@contact.co.in</p>
            </div>
            <div className="col-lg-12 d-flex justify-content-center align-items-center bor">
              <h6>© Copyright cakebakery WordPress WooCommerce Theme. All right reserved.</h6>
            </div>
          </div>
        </div>
      </footer>
     
     
    )
  }
}

export default Footer