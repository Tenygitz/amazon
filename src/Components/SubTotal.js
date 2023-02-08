import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {useSelector} from"react-redux";
import { basketTotal } from "../redux/basket";
import "./SubTotal.css";

function SubTotal() {
  const {user}=useSelector((state)=>state.user) 
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
            <input type="checkbox"/>This order contain vouctheers
          </small>
          </>
            )}
            decimalScale={2} value={total} displayType={"text"} thousandSeparator={true} prefix={"₹ "}
        />
        <button disabled={!user} >
          { !user ? "Please Sign The account for checkout":"Proceed to Checkout"} {/* disbale the checkout button if not user signed in*/}
          </button>
    </div>
  )
}

export default SubTotal