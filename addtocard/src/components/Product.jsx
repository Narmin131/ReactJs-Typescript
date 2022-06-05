import React from 'react'
const Product = (props) => {
    return (
        <div className="col-lg-3 p-2">
            <div className="box">
                <div className="img-box">
                    <img src={props.img} alt="" />
                    <img src={props.img1} alt="" className='second'/>
                    <div className="bottom">
                     
                       <p>Add to Card</p>
                        <div className="in">
                        <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
                <div className="box-text">
                    <h6>{props.title}</h6>
                    <h5>{props.price}$</h5>
                </div>
            </div>
        </div>
    )
}

export default Product