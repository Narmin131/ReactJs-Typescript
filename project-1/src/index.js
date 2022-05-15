import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './sass/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


class Section1 extends Component{
  render(){
    return(
     <section className='first'>
       <header>
         <div className="container-fluid h-100">
           <div className="row h-100">
             <div className="col-lg-3 d-flex flex-column justify-content-center align-items-start h-100">
               <img src="img/logo.png" alt="" />
             </div>
             <div className="col-lg-8">
               <ul>
                 <li><a href="">Home</a></li>
                 <li><a href="">About Us</a></li>
                 <li><a href="">Pages</a></li>
                 <li><a href="">Blog</a></li>
                 <li><a href="">Faq</a></li>
                 <li><a href="">Contact Us</a></li>
                <button><i class="fa-solid fa-plane"></i>Book Now </button>
               </ul>
             </div>
           </div>
         </div>
       </header>
       <div className="main">
       <div className="container-fluid h-100">
         <div className="row h-100">
           <div className="col-lg-5 h-100">
             <div className="text">
               <h4><span>Fly</span>next</h4>
               <h1>Book a private jet instantly</h1>
               <p>Curly Airline proudly raises the bar and exceeds the standard for luxury and corporate private jet charter services. We pride ourselves on offering a professional service.Make Your Trip </p>
             </div>
           </div>
           <div className="col-lg-7 p-0">
             <div className="img">
             <img src="img/plane.png"  />
             </div>
           </div>
         </div>
       </div>
     </div>
     </section>
    )
  }
}

class Section2 extends Component{
  render(){
    return(
      <section className='second'>
<div className="container h-100">
  <div className="row h-100">
   <div className="col-lg-6 h-100">
     <div className="left-img">
       <div className="left-txt">
         <h1>
Business Jet Charter</h1>
<p>
Trade crowded airports and wasted time for the ease, comfort, and convenience of travel by private jet.</p>
<a href=""><i class="fa-solid fa-plane"></i>Book Now</a>
       </div>
     </div>
   </div>
   <div className="col-lg-6 h-100">
     <div className="right-img">
     <div className="right-txt">
     <h5><span>#1</span> Private Jet Charter</h5>
       <ul>
         <li>01 Private Jet Charter</li>
         <li>Business Jet Charter</li>
         <li>03 Private Helicopter</li>
         <li>04 Air Ambulance</li>
       </ul>

     </div>
     </div>
   </div>
  </div>
</div>
      </section>
    )
  }
}


class Section3 extends Component{
  render(){
    return(
      <section className="third">
   <img src="img/img.png" className='img'/>
   <div className="container h-100">
     <div className="row h-100" >
       <div className="col-lg-7 h-100">
         <div className="txt">
           <h4><span>About</span> Flynext</h4>
           <h1>Private Jet Charters save your time and give more comfort</h1>
           <p>Flynext is the only way to fully travel on your terms. Whether it’s accessing a remote destination or taking back control of productivity and flight scheduling</p>
           <div className="card-bottom">
             <h2>Call for book an order</h2>
             <h3>8-800-10-500
</h3>
<button><i class="fa-solid fa-plane"></i>Book Now</button>
           </div>
         </div>
       </div>
     </div>
   </div>
      </section>
    )
  }
}


 class App extends Component {
  render() {
    return (
      <>
      <Section1/>
      <Section2/>
      <Section3/>
      </>
    )
  }
}

ReactDOM.render(<App/>,document.querySelector('#root'));