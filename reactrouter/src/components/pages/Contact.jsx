import React, { Component } from 'react'
import Banner from '../Banner'

export class Contact extends Component {
  render() {
    return (
    <>
    <Banner title={"Contact"}/>
      <section className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194473.18588939894!2d49.8549596!3d40.394592499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2s!4v1653915020659!5m2!1str!2s" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
      <section className='connect'>
<div className="container h-100">
  <div className="row h-100">
    <div className="col-lg-6 h-100 d-flex justify-content-center align-items-center">
      <h4>Join our Newsletter list to get all the latest offers, discounts and other benefits</h4>
    </div>
    <div className="col-lg-6 d-flex justify-content-center align-items-center">
      <input type="text" placeholder='Enter your email address'/>
      <button>Subscribe Now</button>
    </div>
  </div>
</div>
      </section>
      </>
    )
  }
}

export default Contact