import React from 'react';
import Header from './Header';
import Rating from '@mui/material/Rating';
import "./ProductOverView.css"

function ProductOverView({id,title,ratting,price,img,setShow}) {
  console.log("ggg",title)
    const showHandler=()=>{
     
 setShow(true)
    }
  return (<>
  <Header/>
    <div className='ProductOverView' onClick={showHandler}>
        <img src={img} alt="product image"/>
        <div className='ProductOverView-container'>
           <h1>{title}</h1>
           <div className='price-info'>
            <span>₹ </span>
            <span>{price}</span>
        </div>
        <div className='ratting-info'>
                <p><Rating name="half-rating-read" defaultValue={ratting} precision={0.5} readOnly />
            </p>
        </div>
        </div>
    </div>
    </>
  )
}

export default ProductOverView