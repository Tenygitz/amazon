import React from 'react';
import Header from "./Header";
import {useSelector} from"react-redux";
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import Footer from './Footer';
import RelatedProduct from './RelatedProduct';
import "./CheckoutPage.css"

function CheckoutPage() {
  const {basket}=useSelector((state)=>state.basket)
  return (<><Header/>
    <div className="CheckoutPage">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg" alt="Banner-Image"/>
        {
      basket?.length===0 ?( // if basket is empty
        <div className='cartempty'>
        <h1>Your Cart is empty</h1>
        <p>Please Add Items to the cart to Continue Shopping</p>
        </div>
      ):( // if basket has product
      <div className='checkout'>
        <div className="your-cart">
          <h2>Shopping Cart</h2>
           <hr/>
          {
            basket.map((item)=>{
             return(<><CheckoutProduct id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              ratting={item.ratting}
              /> <hr/></>)})
          }
        </div>
        {
      basket.length >0 &&( //condiction to render subtotal
     
    <div className='sub-total'>
      <SubTotal/>
      <RelatedProduct/>
    </div>)}
    
     </div> )
    }
    </div>
    <Footer/>
    </>
  )
}

export default CheckoutPage