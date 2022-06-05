import React from 'react'
import { useCart } from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        cartTotal,
        totalUniqueItems,
        totalItems,
        items,removeItem,
        updateItemQuantity,
        emptyCart,
      } = useCart();
      
  return (
    <section className='text'>
        
    </section>
  )
}

export default Cart