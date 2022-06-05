import React from 'react'
import logo from "../assets/img/logo.svg"
import { NavLink } from 'react-router-dom'
import { useState } from "react"
import Cart from "../components/Cart"
const Header = () => {

    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    return (
        <>
            <header>
                <div className="container h-100 con">
                    <div className="row h-100">
                        <div className="col-lg-3 h-100 d-flex justify-content-center align-items-center">
                            <img src={logo} alt="" />
                        </div>
                        <div className="col-lg-6 h-100">
                            <ul>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/shop">Shop</NavLink>
                                <NavLink to="/blog">Blog </NavLink>
                                <NavLink to="/pages">Pages </NavLink>
                                <NavLink to="/elements">Elements</NavLink>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <div className="right">
                                <span>Login</span>/<span>Register</span>
                                <i class="fa-brands fa-searchengin"></i>
                                <i class="fa-regular fa-heart"></i><br />
                                <i class="fa-solid fa-cart-shopping" onClick={ToggleSidebar}></i>
                                <div>
                                    0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className={`sidemenu ${isOpen == true ? 'active' : ''}`}>

                <div className="head">
                    <p>Shopping Cart</p>
                    <i class="fa-solid fa-xmark" onClick={ToggleSidebar}></i>
                </div>
                <Cart/>
            </div>

            <div className={`overlay ${isOpen == true ? 'activ' : ''}`} onClick={ToggleSidebar}></div>

        </>
    )
}

export default Header