import React from 'react'
import { useCart } from "react-use-cart";
const Cart = () => {
  const {
    isEmpty,
    cartTotal,
    // totalUniqueItems,
    totalItems,
    items, removeItem,
    updateItemQuantity,
    // emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center mt-5">Your cart is empty</h1>;
  return (
    <>
      <div className='text'>
        <div className="total d-flex justify-content-between">
          <p>Subtotal:</p>
          <p>{cartTotal}$</p>
        </div>
      </div>

      <div className="products2">

        {
          items.map((item, index) => {
            return (
              <>
                <div className="product">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="middle">
                    <p>{item.title}</p>
                    <span onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</span>
                    <span >({item.quantity})</span>
                    <span onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</span>
                    <h5>({item.quantity}) x <p>{item.price}$</p></h5>
                  </div>
                  <div className="i">
                    <i class="fa-solid fa-xmark close" onClick={() => removeItem(item.id)}></i>
                  </div>
                </div>
              </>
            )
          })}


      </div>
    </>

  )
}

export default Cart