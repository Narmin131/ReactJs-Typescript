import React from 'react'
import Product from './Product'
import Data from "./Data"
import { Component } from 'react'

class Products extends Component {
  render(){
     return (
    <section className='products'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
            <h4>WOODEN ACCESSORIES</h4>
            <h2>Featured Products</h2>
            <p>Will your clients accept that you go about things order.</p>
          </div>
          {Data.productData.map((item,acar)=>{
            return(
              <Product
              img={item.img}
              img1={item.img1}
              title={item.title}
              price1={item.price}
              product={item}
              key={acar}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
  }
 
}

export default Products