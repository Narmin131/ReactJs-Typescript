import React, { Component } from 'react'
import {NavLink, Link} from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
     <nav>
       <div className="container h-100">
         <div className="row h-100 d-flex justify-content-between">
           <div className="col-lg-4 h-100">
             <div className="left">
             <p><i class="fa-solid fa-phone"></i>+(1800) 456 7890 </p>
             <p><i class="fa-regular fa-envelope"></i>info@cakebakery.com</p>
             </div>
           </div>
           <div className="col-lg-4 h-100">
             <div className="right">
             <i class="fa-brands fa-facebook"></i>
             <i class="fa-brands fa-instagram"></i>
             <i class="fa-brands fa-google-plus-g"></i>
             <i class="fa-brands fa-linkedin"></i>
             <div className="line"></div>
             <i class="fa-solid fa-bag-shopping"></i>
             <i class="fa-solid fa-magnifying-glass"></i>
             </div>
           </div>
         </div>
       </div>
     </nav>
    )
  }
}

export default Nav