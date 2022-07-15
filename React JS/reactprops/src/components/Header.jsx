import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import logo1 from '../assets/img/logo1.svg';
import logo2 from '../assets/img/wallet.svg';
class Header extends Component {
  render() {
    return (
      <nav>
          <div className="logo">
<img src={logo} />
          </div>
          <div className="links">
              <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Roadmap</a></li>
                  <li><a href="">Team</a></li>
                  <li><a href="">FAQ</a></li>
                  <li><a href="">Pages+</a></li>
              </ul>
          </div>
          <div className="btns">
              <button><img src={logo1}  />  JOIN</button>
              <button><img src={logo2} />  CONNECT</button>
          </div>
      </nav>
    )
  }
}












export default Header