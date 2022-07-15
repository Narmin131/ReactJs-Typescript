import React, { Component } from 'react'
import bg from '../assets/img/footer_bg.png';
import img from "../assets/img/ft-img.png"
import img1 from "../assets/img/left.png"
import img2 from "../assets/img/right.png"
import logo from "../assets/img/logo.png"
class Footer extends Component {
    render() {
        return (
            <section className='footer' style={{ backgroundImage: `url(${bg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
                            <h1>JOIN OUR COMMUNITY &</h1>
                            <h1>GET EARLY ACCESS</h1>
                        </div>
                        <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center p-5">
                            <button className='list'>Whitelist now</button>
                            <button className='discord'>Join Discord</button>
                        </div>
                        <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center p-3">
                            <div className="icons d-flex flex-row justify-content-center align-items-center pb-5">
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-telegram"></i>
                                <i class="fa-brands fa-twitch"></i>
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                        <div className="col-lg-12 d-flex flex-row justify-content-center align-items-center">
                            <img src={img} alt="" />
                        </div>
                        <div className="ft d-flex flex-row ">
                            <img src={img1} alt="" className='sol' />
                            <img src={img2} alt="" className='sag' />
                            <div className="container d-flex flex-row align-items-center">
                                <div className="logo">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="div">
                                <i class="fa-solid fa-angle-up"></i>
                                </div>
                                <div className="copy">
                                    <p>Copyright © 2022 Bithu</p>
                                </div>
                                <div className="links">
                                    <ul>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">Roadmap</a></li>
                                        <li><a href="">Team</a></li>
                                        <li><a href="">FAQ</a></li>
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


export default Footer