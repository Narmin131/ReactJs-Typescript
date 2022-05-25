import React, { Component } from 'react';
import "../assets/sass/style.css";
import img22 from "../assets/img/c1.png";
import img2 from "../assets/img/c2.png";
import img33 from "../assets/img/c3.png";
import img3 from "../assets/img/c4.png";
import img44 from "../assets/img/c5.png";
import img4 from "../assets/img/c6.png";
import border from "../assets/img/border.png";
import img77 from "../assets/img/77.png";
import img7 from "../assets/img/7.png";
import img88 from "../assets/img/88.png";
import img8 from "../assets/img/8.png";
import img99 from "../assets/img/99.png";
import img9 from "../assets/img/9.png";


import img1 from "../assets/img/c8.png";
import img11 from "../assets/img/c88.png";
import img0 from "../assets/img/88.png";
import img00 from "../assets/img/c9.png";
import imgg from "../assets/img/c77.png";
import img from "../assets/img/c7.png";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.latestCoffee = this.latestCoffee.bind(this);
    this.lastCoffee = this.lastCoffee.bind(this);
    this.state = {
      img1: img2,
      img11: img22,
      name1: "Arabica",
      money1: "$14",

      img2: img3,
      img22: img33,
      name2: "Black",
      money2: "$10-$17",

      img3: img4,
      img33: img44,
      name3: "Black",
      money3: "$23",

      btnn:"active",
    }
  }

latestCoffee(){
  this.lastCoffee = this.lastCoffee.bind(this);
    this.setState({
      img1: img7,
      img11: img77,
      name1: "White",
      money1: "$4",

      img2: img8,
      img22: img88,
      name2: "Black",
      money2: "$25",

      img3: img9,
      img33: img99,
      name3: "Black",
      money3: "$53",

      btnn:"active",
    });
}
lastCoffee(){
  this.setState({
    img1: img,
    img11: imgg,
    name1: "Arabica",
    money1: "$44",

    img2: img0,
    img22: img00,
    name2: "Black",
    money2: "$31",

    img3: img11,
    img33: img1,
    name3: "Black",
    money3: "$15",

    btnn:'active',
  });
}
  render() {
    return (
      <section className='cards'>
        <div className="container ">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center" >
              <h1>Latest Product</h1>
            </div>
            <div className="col-lg-12 d-flex justify-content-center">
              <img src={border} alt="" />
            </div>
            <div className="col-lg-12 d-flex justify-content-center p-3">
              <button onClick={this.state} >All</button>
              <button onClick={this.latestCoffee} >Latest</button>
              <button onClick={this.lastCoffee} >Featured</button>
            </div>


            <div className="col-lg-4 ">
              <div className="box">
                <div className="img">
                  <img src={this.state.img1} className="first" />
                  <div className="img-2">
                    <img src={this.state.img11} className="second" />
                  </div>
                  <div className="icons">
                    <i className="fa-solid fa-eye"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-brands fa-42-group"></i>
                    <i className="fa-solid fa-basket-shopping"></i>
                  </div>
                </div>
                <p>{this.state.name1}</p>
                <h6>{this.state.money1}</h6>
              </div>
            </div>


            <div className="col-lg-4 ">
              <div className="box">
                <div className="img">
                  <img src={this.state.img2} className="first" />
                  <div className="img-2">
                    <img src={this.state.img22} className="second" />
                  </div>
                  <div className="icons">
                    <i className="fa-solid fa-eye"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-brands fa-42-group"></i>
                    <i className="fa-solid fa-basket-shopping"></i>
                  </div>
                </div>
                <p>{this.state.name2}</p>
                <h6>{this.state.money2}</h6>
              </div>
            </div>

            <div className="col-lg-4 ">
              <div className="box">
                <div className="img">
                  <img src={this.state.img3} className="first" />
                  <div className="img-2">
                    <img src={this.state.img33} className="second" />
                  </div>
                  <div className="icons">
                    <i className="fa-solid fa-eye"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-brands fa-42-group"></i>
                    <i className="fa-solid fa-basket-shopping"></i>
                  </div>
                </div>
                <p>{this.state.name3}</p>
                <h6>{this.state.money3}</h6>
              </div>
            </div>



          </div>
        </div>
      </section>
    )
  }
}

export default Cards;