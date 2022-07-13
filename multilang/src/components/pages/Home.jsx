import React from 'react'
import { useEffect,useState } from 'react'
import img from "../assets/img/img.png"
import { useTranslation } from 'react-i18next'
import "../../i18"
import State from './State'

const Home = () => {
     
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }
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
                    <div className="col-lg-9">
                        <ul>
                            <li>{t('nav.0')}</li>
                            <li>{t('nav.1')}</li>
                            <li>{t('nav.2')}</li>
                            <li>{t('nav.3')}</li>
                            <li>{t('nav.4')}</li>
                            <li>{t('nav.5')}</li>
                            <li>{t('nav.6')}</li>
                            <li>{t('nav.7')}</li>
                            <button 
                            className='btn btn-light fw-bold'
                            onClick={ChangeMode}>Mode</button>
                            <button 
                            className='btn btn-light fw-bold'
                            onClick={() => handleClick('az')}
                            >Az</button>
                            <button 
                            className='btn btn-light fw-bold'
                            onClick={() => handleClick('en')}
                            >Eng</button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div className="main">
            <h4>{t('hero.0')}</h4>
            <h2>{t('hero.1')}</h2>
            <div className="btns">
             <button>Download Now</button>
             <button>Discover More</button>
            </div>
        </div>
    </div>
   
    <div className="features">
     <img src={img} alt="" />
    </div>


    <div className="ara">
        <h4>SERA IS YOUR LAST TEMPLATE THEME EVER!</h4>
        <button>Buy Now</button>
    </div>
    <State/>
    </>
  )
}

export default Home