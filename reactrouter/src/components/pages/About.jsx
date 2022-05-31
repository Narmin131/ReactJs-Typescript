import React, { Component } from 'react';
import Banner from "../Banner";
import img1 from "../../assets/img/bakery-1.jpg"
import img2 from "../../assets/img/bakery-2.jpg"
import img3 from "../../assets/img/bakery-3.jpg"
export class About extends Component {
  render() {
    return ( 
      <> 
      <Banner title={"About Us"}/>
      <section className='about'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center flex-column align-items-center">
              <h1>Our Bakery Approach</h1>
              <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem.</p>
            </div>
            <div className="col-lg-4 p-4">
              <img src={img1} alt="" />
            </div>
            <div className="col-lg-4 p-4">
              <img src={img2} alt="" />
            </div>
            <div className="col-lg-4 p-4">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </section>
      </>
    
    )
  }
}


export default About
