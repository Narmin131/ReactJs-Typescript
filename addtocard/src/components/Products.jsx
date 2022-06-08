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