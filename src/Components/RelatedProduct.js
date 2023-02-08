import React from 'react';
import Rating from '@mui/material/Rating';
import "./RelateProduct.css"

function RelatedProduct() {
  return (
    <div className='RelatedProduct'>
        <h3>Products related to your cart</h3>
        <div className='RelatedProduct-info'>
            <img src="https://m.media-amazon.com/images/I/61nzPMNY8zL._SX679_.jpg"/>
            <div className='RelatedProduct-infos'>
             <p>Apple iPhone 13 Pro</p>
             <p><Rating name="half-rating-read" defaultValue={5}  precision={0.5} readOnly /></p>
             <div className='prices-info'>
            <span>₹ </span>
            <span>109900</span>
            </div>
            <button  className='CartBtn'>View </button>
            </div>
        </div>
         <div className='RelatedProduct-info'>
            <img src="https://m.media-amazon.com/images/I/41sJ50FH9OL._SX300_SY300_QL70_FMwebp_.jpg"/>
            <div className='RelatedProduct-infos'>
             <p>Redmi Note 11T 5G</p>
             <p><Rating name="half-rating-read" defaultValue={4}   precision={0.5} readOnly /></p>
             <div className='prices-info'>
            <span>₹ </span>
            <span>15999</span>
            </div>
            <button  className='CartBtn'>View </button>
            </div>
        </div>
         <div className='RelatedProduct-info'>
            <img src="https://m.media-amazon.com/images/I/61E4zA32FrL._SX569_.jpg"/>
            <div className='RelatedProduct-infos'>
             <p>iQOO Z6 Pro 5G</p>
             <p><Rating name="half-rating-read" defaultValue={3.5}  precision={0.5} readOnly /></p>
             <div className='prices-info'>
            <span>₹ </span>
            <span>20999</span>
            </div>
            <button  className='CartBtn'>View  </button>
            </div>
        </div>
        <div className='RelatedProduct-info'>
            <img src="https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg"/>
            <div className='RelatedProduct-infos'>
             <p>OnePlus 10 Pro 5G</p>
             <p><Rating name="half-rating-read" defaultValue={3.5}  precision={0.5} readOnly /></p>
             <div className='prices-info'>
            <span>₹ </span>
            <span>60999</span>
            </div>
            <button  className='CartsBtn'>View  </button>
            </div>
        </div>
    </div>
  )
}

export default RelatedProduct