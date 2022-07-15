import React, { Component } from 'react'
import poster1 from "../assets/img/poster1.png"
import poster2 from "../assets/img/poster2.png"

class Coffees extends Component {
    render() {
        return (
            <section className='coffees'>
                <div className="container h-100">
                    <div className="row h-100" >
                        <div className="col-lg-6 h-100 d-flex justify-content-center flex-column align-items-center">
                            <div className="left">
                                <img src={poster1} alt="" />
                                <div className="poster">
                                    <p>20% OFF</p>
                                    <h5>Americano Coffee</h5>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 h-100 d-flex justify-content-center flex-column align-items-center">
                            <div className="right">
                                <img src={poster2} alt="" />
                                <div className="poster">
                                    <p>20% OFF</p>
                                    <h5>Iced Coffee</h5>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Coffees