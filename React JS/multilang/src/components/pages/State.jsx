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
import { useState } from 'react'

const State = () => {

    const friendsArray = [
        { img: one },
        { img: two },
        { img: three },
        { img: four },
        { img: five },
        { img: six },
        { img: two },
        { img: eight },
        { img: nine },
    ];

     const all = () =>{
        var c = document.querySelectorAll('.img');
        for(var i=0;i<c.length;i++){
            c[i].classList.remove('opacity')
            c[i].classList.add('op')
        }
    }
    const first = () =>{
        var a = document.querySelectorAll('.a');
        var b = document.querySelectorAll('.b');
        var c = document.querySelectorAll('.img');
        for(var i=0;i<a.length;i++){
            c[i].classList.remove('op')
            a[i].classList.toggle("opacity")
            b[i].classList.remove("opacity")
        }
    }

    const second = () =>{
        var a = document.querySelectorAll('.a');
        var b = document.querySelectorAll('.b');
        
        var c = document.querySelectorAll('.img');
        for(var i=0;i<b.length;i++){
            c[i].classList.remove('op')
            a[i].classList.remove("opacity")
            b[i].classList.toggle("opacity")
        }
    }

    

    const [blogs, setBlogs] = useState(friendsArray)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 pt-4 d-flex justify-content-center">
                        <div className="btns1">
                            <button onClick={all}>All</button>
                            <button onClick={first}>Websites</button>
                            <button onClick={second} >Logo</button>
                        
                        </div>
                    </div>
                    {/* {blogs.map((blog) => (
                        <div className="col-lg-4 p-2 pt-4 pb-4">
                            <img src={blog.img} alt="" width="100%" />
                        </div>
                    ))} */}

                    <div className="col-lg-4 p-2 pt-4 pb-4">
                        <img src={one} className='a img' width="100%" />
                    </div>

                    <div className="col-lg-4 p-2 pt-4 pb-4">
                        <img src={nine} className='b img' width="100%" />
                    </div>
                    <div className="col-lg-4 p-2 pt-4 pb-4">
                        <img src={two} className='b img' width="100%" />
                    </div>
                    <div className="col-lg-4 p-2 pt-4 pb-4">
                        <img src={four} className='img' width="100%" />
                    </div>
                    <div className="col-lg-4 p-2 pt-4 pb-4">
                        <img src={five} className='a img'  width="100%" />
                    </div>
                    <div className="col-lg-4 p-2 pt-4 pb-4">
                        <img src={six} className='img' width="100%" />
                    </div>
                    <div className="col-lg-4 p-2 pt-4 pb-4">
                        <img src={seven} className='a img'  width="100%" />
                    </div>
                    <div className="col-lg-4 p-2 pt-4 pb-4">
                        <img src={eight} className='a img'  width="100%" />
                    </div>
                    <div className="col-lg-4 p-2 pt-4 pb-4">
                        <img src={nine} className='b img' width="100%" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default State
