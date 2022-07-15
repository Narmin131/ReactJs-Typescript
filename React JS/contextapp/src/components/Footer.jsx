import React from 'react'
import logo from "../components/assets/img/basho_light.svg"

const Footer = () => {
  return (
  <footer>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-between pt-4 pb-4 align-items-center border-bottom">
        <h2>Subscribe to <span>
            new posts</span>
        </h2>
        <div className="all">
        <input type="text" placeholder='Your email address' />
        <button>Subscribe</button>
        </div>
      </div>
      <div className="col-lg-12 pb-3 pt-5">
<img src={logo} alt="" />
<h6>A minimal, functional theme for running a <br/> paid-membership publication on Ghost.</h6>
      </div>
      <div className="col-lg-3">
        <h1>Social</h1>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>KickStar</li>
          <li>Vimeo</li>
        </ul>
      </div>
      <div className="col-lg-3">
        <h1>About</h1>
        <ul>
          <li>Style Guide
</li>
          <li>Features
</li>
          <li>Contact</li>
          <li>404
</li>
<li>Get Theme</li>
        </ul>
      </div>
      <div className="col-lg-3">
        <h1>Features
</h1>
        <ul>
          <li>Demos</li>
          <li>Light version</li>
          <li>Color version</li>
          <li>Partial version</li>
          <li>Dark version</li>
        </ul>
      </div>
      <div className="col-lg-3">
        <h1>Membership</h1>
        <ul>
          <li>Account
</li>
          <li>Membership
</li>
          <li>Subscribe</li>
          <li>Tags</li>
          <li>Authors</li>
        </ul>
      </div>
      <div className="col-lg-12 pt-3">
        <p>© Basho 2022. Published with Ghost and Basho.</p>
      </div>
    </div>
  </div>
  </footer>
  )
}

export default Footer