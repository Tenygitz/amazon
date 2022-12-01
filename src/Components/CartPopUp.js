import React from 'react';
import "./CartPopUp.css";
import { useStateValue } from '../StateProvider';
import Rating from '@mui/material/Rating';
import CurrencyFormat from 'react-currency-format';
import DeleteForever from '@mui/icons-material/DeleteForever';
import { basketTotal } from '../reducer';
import CancelIcon from '@mui/icons-material/Cancel';


function CartPopUp({id,setOpen}) {
    const [{basket},dispatch]=useStateValue()
    const closeHandler=()=>{
     setOpen(false)
    }
    const removeProductHandler=()=>{
        dispatch({    //remove item from cart
          type:"Remove_From_cart",
          id:id
        })}
  return (
    <div className='CartPopUp'>
     <div className='head'>
     <h1>Current Cart</h1>
       <CancelIcon onClick={closeHandler} className="CancelIcon"/>
       </div>
      {
        basket.map((items)=>{
           return(
            <>
            <div className="CheckoutProducts">
        <img className="CheckoutProducs-img"src={items.img}/>
     <div className="CheckoutProducts-wraps">
    
     <h1>{items.title}</h1>
    
    <div className='prices-infos'>
            <span>₹ </span>
            <span>{items.price}</span>
        </div>
        <div className='rattings-infos'>
                <p><Rating name="half-rating-read"  defaultValue={items.ratting} precision={0.5} readOnly />
            </p>
        </div>
        <div className='Delete'>
            <h5>Remove Item</h5>
       <DeleteForever onClick={removeProductHandler} className='DeleteIcon'/>
       </div>
    </div>
        </div>
            </>
           ) 
        })
      }<div className='cartSub'>
          
        <h1>SubTotal</h1>
        <CurrencyFormat //currency format library
          renderText={(value)=>(
          <>
          <p>SubTotal({basket.length}Items):<strong>{value}</strong></p>
          <small>
            <input type="checkbox"/>This order contain voucteers
          </small>
          </>
  )}
            decimalScale={2} value={basketTotal(basket)} displayType={"text"} thousandSeparator={true} prefix={"₹ "}
        />
        <button>Proceed To checkout</button>
    </div>
  
      
    </div>
  )
}

export default CartPopUp