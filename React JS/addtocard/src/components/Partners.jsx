import React from 'react'
import pt1 from "../assets/img/1.webp"
import pt2 from "../assets/img/2.webp"
import pt3 from "../assets/img/3.webp"
import pt4 from "../assets/img/4.webp"
import pt5 from "../assets/img/5.webp"
import pt6 from "../assets/img/6.webp"

const Partners = () => {
  return (
    <section className='partners'>
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <img src={pt1} alt="" />
                </div>
                <div className="col-lg-2">
                    <img src={pt2} alt="" />
                </div>
                <div className="col-lg-2">
                    <img src={pt3} alt="" />
                </div>
                <div className="col-lg-2">
                    <img src={pt4} alt="" />
                </div> 
                 <div className="col-lg-2">
                    <img src={pt2} alt="" />
                </div>
                <div className="col-lg-2">
                    <img src={pt6} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Partners