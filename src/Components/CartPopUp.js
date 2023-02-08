import React from 'react';
import {useSelector} from"react-redux";
import Rating from '@mui/material/Rating';
import CurrencyFormat from 'react-currency-format';
import DeleteForever from '@mui/icons-material/DeleteForever';
import CancelIcon from '@mui/icons-material/Cancel';
import {RemoveFromCart} from "../redux/basket";
import {useDispatch} from"react-redux";
import { basketTotal } from "../redux/basket";
import "./CartPopUp.css";

function CartPopUp({setOpens,id}) {
  const {basket}=useSelector((state)=>state.basket)
  const {user}=useSelector((state)=>state.user) 
  const total = useSelector(basketTotal);
  const dispatch=useDispatch()
   console.log("popupbasket",basket.id)
   function truncate(string,n){
    return(
        string?.length>n?string.substr(0,n-1)+"...":string
          )
       }

    const closeHandler=()=>{
     setOpens(false)
    }

    const removeProductHandler=()=>{
    dispatch(RemoveFromCart({id})) 
    }
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
            <div key={items.id} className="CheckoutProducts">
           <img className="CheckoutProducs-img"src={items.img}/>
           <div className="CheckoutProducts-wraps">
   
           <h1>{truncate((items.title),15)}</h1>
    
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
      }
      <div className='cartSub'>
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
            decimalScale={2} value={total} displayType={"text"} thousandSeparator={true} prefix={"₹ "}
        />
        <button disabled={!user}>{!user?"Please Sign The account for checkout":"Proceed To checkout"}</button>
    </div>
    </div>
  )
}

export default CartPopUp