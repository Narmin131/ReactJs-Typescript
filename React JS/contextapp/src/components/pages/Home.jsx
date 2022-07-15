import React from 'react'
import img1 from '../assets/img/11.jpeg'
import img2 from '../assets/img/22.jpeg'
import img3 from '../assets/img/33.jpeg'

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3><span>This is Basho.</span> A digital <br /> magazine that promises to <br /> deliver inspiring stories from <br /> all disciplines.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="stories">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="box">
                <img src={img1} alt="" />
                <h3>New technology is not good or evil in and of itself</h3>
                <p>			Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien. Donec pretium tortor augue...
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <img src={img2} alt="" />
                <h3>It’s a new era in design, there are no rules</h3>
                <p>			Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien. Donec pretium tortor augue...
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <img src={img3} alt="" />
                <h3>Perfection has to do with the end product</h3>
                <p>			Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien. Donec pretium tortor augue...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home