import React from 'react'
import f1 from "../assets/img/decor1.webp"
import f2 from "../assets/img/decor2.webp"
import f3 from "../assets/img/decor3.webp"
const Gallery = () => {
    return (
        <section className='gallery'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="box2">
                            <img src={f1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="boxx">
                            <div className="div1">
                                <img src={f2} alt="" />
                            </div>
                            <div className="div2">
                                <img src={f3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery