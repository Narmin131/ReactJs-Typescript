import React, { useState, useEffect } from 'react';
import 'animate.css';
// import 'attention_seekers/bounce.css';
import img1 from "../assets/img/4.jpg"
import img2 from "../assets/img/6.jpg"
import img3 from "../assets/img/5.jpg"
import img5 from "../assets/img/10.jpg"
import img4 from "../assets/img/7.jpg"
import img8 from "../assets/img/11.jpg"
import img6 from "../assets/img/8.jpg"
import img7 from "../assets/img/9.jpg"
import img11 from "../assets/img/14.jpg"
import img12 from "../assets/img/11.jpg"
import img13 from "../assets/img/12.jpg"
import img14 from "../assets/img/13.jpg"
import img9 from "../assets/img/15.jpg"
import img10 from "../assets/img/17.jpg"



function Products() {
    const [count, setCount] = useState([
       {
        one:img1,
        two:img2,
        three:img3,
        four:img4
       }
    ]);

function NewItem(){
        const updateCount = [
            {
                one:img5,
                two:img6,
                three:img7,
                four:img8
               }
        ];
        setCount(updateCount);
    }

function SecondItem(){
        const updateSecond = [
            {
                one:img3,
                two:img7,
                three:img9,
                four:img10
               }
        ];
        setCount(updateSecond);
    }

function ThirdItem(){
        const updateThird = [
            {
                one:img6,
                two:img12,
                three:img13,
                four:img14
               }
        ];
        setCount(updateThird);
    }

    function FourItem(){
        const updateFour = [
            {
                one:img1,
                two:img3,
                three:img14,
                four:img12
               }
        ];
        setCount(updateFour);
    }
    return (
            <>
            <div className="products animate__fadeIn animate__animated">
            <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-3">
                            <h2>Popular Products</h2>
                        </div>
                        <div className="col-lg-7 d-flex justify-content-center align-items-center">
                            <a onClick={NewItem}>All</a>
                            <a onClick={SecondItem}>
                                Milks & Dairies</a>
                            <a onClick={ThirdItem}>
                                Coffes & Teas</a>
                            <a onClick={FourItem}>Pet Foods</a>
                        </div>
                        <div className="col-lg-3 pt-5">
                            <div className="box">

                                {count.map((map)=>(
                                   <img src={map.one} alt="" />
                                ))}
                                   
                                    <div className="text">
                                    <p>Seeds of Change Organic Quinoa, Brown, & Red Rice</p>
                                    </div>
                                    <a className='add'>Add</a>
                            </div>
                            
                        </div>
                        <div className="col-lg-3 pt-5">
                            <div className="box">
                                
                            {count.map((map)=>(
                                   <img src={map.two} alt="" />
                                ))}
                                    <div className="text">
                                    <p>All Natural Italian-Style Chicken Meatballs</p>
                                    </div>
                                    
                                    <a className='add'>Add</a>
                            </div>
                            
                        </div>
                        <div className="col-lg-3 pt-5">
                            <div className="box">
                                
                            {count.map((map)=>(
                                   <img src={map.three} alt="" />
                                ))}
                                    <div className="text">
                                    <p>Angie’s Boomchickapop Sweet & Salty Kettle Corn</p>
                                    </div>
                                    
                                    <a className='add'>Add</a>
                            </div>
                            
                        </div>
                        <div className="col-lg-3 pt-5">
                            <div className="box">
                            {count.map((map)=>(
                                   <img src={map.four} alt="" />
                                ))}
                                    <div className="text">
                                    <p>Foster Farms Takeout Crispy Classic Buffalo Wings</p>
                                    
                                    </div>
                                    <a className='add'>Add</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }

export default Products