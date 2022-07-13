import React, { Component } from 'react'
import one from "../assets/img/img-01.jpg"
import two from "../assets/img/img-02.jpg"
import three from "../assets/img/img-03.jpg"
import four from "../assets/img/img-04.jpg"
import five from "../assets/img/img-05.jpg"
import six from "../assets/img/img-06.jpg"
import seven from "../assets/img/img-01.jpg"
import eight from "../assets/img/img-08.jpg"
import nine from "../assets/img/img-09.jpg"

export class State extends Component {
    constructor() {
        super()
        this.state = {
            img1: one,
            img2: two,
            img3: three,
            img4: four,
            img5: five,
            img6: six,
            img7: seven,
            img8: eight,
            img9: nine,
        }
    }
    render() {
        return (
            <>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 pt-4 d-flex justify-content-center">
                            <div className="btns1">
                                <button>All</button>
                                <button>Websites</button>
                                <button>Logo</button>
                                <button>Graphic Design</button>
                                <button>Development</button>
                                <button>Video</button>
                                <button>Photography</button>
                            </div>
                        </div>

                        <div className="col-lg-4 pt-4">
                            <img src={this.state.img1} alt="" width="350px" />
                        </div>
                        <div className="col-lg-4 pt-4">
                            <img src={this.state.img1} alt="" width="350px" />
                        </div>
                        <div className="col-lg-4 pt-4">
                            <img src={this.state.img1} alt="" width="350px" />
                        </div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default State
