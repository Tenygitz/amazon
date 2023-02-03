import React from 'react';
import "./SubTotal.css";
import CurrencyFormat from 'react-currency-format';
import {useSelector} from"react-redux";
import { basketTotal } from "../redux/basket";



function SubTotal() {
   
  const {basket}=useSelector((state)=>state.basket)
  const total = useSelector(basketTotal);

   
   
  return (
   
    <div className='SubTotals'>
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
        <button>Proceed To checkout</button>
    </div>
  )
}

export default SubTotal