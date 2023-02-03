import React from 'react';
import "./CheckoutProduct.css";
import Rating from '@mui/material/Rating';
import {useSelector} from"react-redux";
import {useDispatch} from"react-redux";
import {RemoveFromCart} from "../redux/basket"

function CheckoutProduct({id,img,title,ratting,price}) {
  const {basket}=useSelector((state)=>state.basket)
  const dispatch=useDispatch()
  const removeProductHandler=()=>{
  dispatch(RemoveFromCart({id}))}
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
    </div>
    </div>
  )
}

export default CheckoutProduct