import React from 'react'
import { useEffect,useState } from 'react'
import img from "../assets/img/img.png"

const Home = () => {
    const [theme,setTheme] = useState("light");

    const ChangeMode = () =>{
        theme === "light" ? setTheme("dark") : setTheme("light")
    }

    useEffect(()=>{
      document.body.className = theme;
    },[theme])
  return (
    <>
    <div className="hero">
        <nav>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-2">
                        <h1>Sera</h1>
                    </div>
                    <div className="col-lg-8">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Features</li>
                            <li>Portfolios</li>
                            <li>Blog</li>
                            <li>Team</li>
                            <li>Prices</li>
                            <li>Contact</li>
                            <button 
                            className='btn btn-light fw-bold'
                            onClick={ChangeMode}>Mode</button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div className="main">
            <h4>WE ALWAYS</h4>
            <h2>CREATE THE <span>IMPOSSIBLE</span></h2>
            <div className="btns">
             <button>Download Now</button>
             <button>Discover More</button>
            </div>
        </div>
    </div>

    <div className="features">
     <img src={img} alt="" />
    </div>
    </>
  )
}

export default Home