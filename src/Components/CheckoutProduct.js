import React from 'react';
import "./CheckoutProduct.css";
import Rating from '@mui/material/Rating';
import { useStateValue } from '../StateProvider';

function CheckoutProduct({id,img,title,ratting,price}) {
  const [{basket},dispatch]=useStateValue()
  const removeProductHandler=()=>{
  dispatch({    //remove item from cart
    type:"Remove_From_cart",
    id:id
  })}
  return (
    <div className="CheckoutProduct">
        <img className="CheckoutProduc-img"src={img}/>
     <div className="CheckoutProduct-wrap">
    
     <h1>{title}</h1>
    
    <div className='price-infos'>
            <span>₹ </span>
            <span>{price}</span>
        </div>
        <div className='ratting-infos'>
                <p><Rating name="half-rating-read" defaultValue={ratting} precision={0.5} readOnly />
            </p>
        </div>
        <button onClick={removeProductHandler}>Remove Item</button>
    </div></div>
  )
}

export default CheckoutProduct