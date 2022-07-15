import React, { Component } from 'react'
import logo from "../assets/img/icon.svg"
export class Nav extends Component {
  render() {
    return (
      <nav>
         <div className="container-fluid h-100">
             <div className="row h-100">
                 <div className="col-lg-2 d-flex justify-content-center align-items-center">
<div className="left">
    <div><p>all</p></div>
    <div className='second'><p>browse</p></div>
   <div className='third'> <p>categories</p></div>
</div>
                 </div>
                 <div className="col-lg-8 d-flex justify-content-start align-items-center">
<ul>
    <li><a href=""> Deals</a></li>
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Shop</a></li>
    <li><a href="">Vendors</a></li>
    <li><a href="">Mega Menu</a></li>
    <li><a href="">Blog</a></li>
    <li><a href="">Pages</a></li>
    <li><a href="">Contact</a></li>

</ul>
                 </div>
                 <div className="col-lg-2">
<div className="right">
<img src={logo} alt="" />
<h2>1900 - <br /> 888</h2>
</div>
                 </div>
             </div>
         </div>
      </nav>
    )
  }
}

export default Nav