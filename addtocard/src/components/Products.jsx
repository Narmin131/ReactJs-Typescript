import React from 'react'
import Product from './Product'
import Data from "./Data"
const Products = () => {
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
              price={item.price}
              key={acar}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products