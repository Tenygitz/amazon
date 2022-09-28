import React from 'react';
import "./SubTotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider'
import { basketTotal } from '../reducer';


function SubTotal() {
   
    const [{basket},dispatch]=useStateValue()
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
            decimalScale={2} value={basketTotal(basket)} displayType={"text"} thousandSeparator={true} prefix={"₹ "}
        />
        <button>Proceed To checkout</button>
    </div>
  )
}

export default SubTotal