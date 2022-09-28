import React from 'react';
import { useStateValue } from '../StateProvider';
import "./Product.css";
import Rating from '@mui/material/Rating';

function Product({id,title,ratting,price,img}) {
  const [{basket},dispatch]=useStateValue();// use context
  const addToBasketHandler=()=>{
   dispatch({
    type:"Add_To_Cart",// adding thisactionto reducer function
    item:{
      id:id,
      title:title,
      ratting:ratting,
      price:price,
      img:img
    }
   })
  }
  return (
    <div className='products'>
        <p>{title}</p>
        <div className='price-info'>
            <span>₹ </span>
            <span>{price}</span>
        </div>
        <div className='ratting-info'>
                <p><Rating name="half-rating-read" defaultValue={ratting} precision={0.5} readOnly />
            </p>
        </div>
        <img src={img} />
        <button onClick={addToBasketHandler}>Add to Cart</button>

    </div>
  )
}

export default Product