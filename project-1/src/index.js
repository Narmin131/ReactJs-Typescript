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
                <button>Book Now </button>
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




 class App extends Component {
  render() {
    return (
      <>
      <Section1/>
      </>
    )
  }
}

ReactDOM.render(<App/>,document.querySelector('#root'));