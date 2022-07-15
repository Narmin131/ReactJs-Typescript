import React from 'react'
import logo from "../components/assets/img/basho_light.svg"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Nav = () => {

  const [theme,setTheme] = useState("dark-theme");

  const toggleTheme = () =>{
       theme === "dark-theme" ? setTheme("color-theme") : setTheme("dark-theme");
  };

  useEffect(()=>{
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <nav>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-2">
              <img src={logo} />
            </div>
            <div className="col-lg-5">
              <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/addblog">Add blog</Link>
                </li>
                <li>
                  <button onClick={toggleTheme}>Mode</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav