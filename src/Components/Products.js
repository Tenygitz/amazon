import React,{useState} from 'react';
import "./Product.css";
import Rating from '@mui/material/Rating';
import {useNavigate} from"react-router-dom"
import ProductOverView from './ProductOverView';
import {useDispatch} from"react-redux";
import {useSelector} from"react-redux";
import {AddToCart} from "../redux/basket";
import {AddToProductOverView} from "../redux/basket"

function Product({id,title,ratting,price,img,images,img1,img2,img3,imagefolder,description}) {
  const {basket}=useSelector((state)=>state.basket)
  const [open,setOpen]=useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  console.log("basketItem",basket)
  console.log("titkleoFthe",title)
  const addToBasketHandler=()=>{
   
    
   const item={
      id:id,
      title:title,
      ratting:ratting,
      price:price,
      img:img
    }
    dispatch(AddToCart(item))
  }
  const productOverViews=()=>{
    const item={
      id:id,
      title:title,
      ratting:ratting,
      price:price,
      img:img,
      images:images,
      img1:img1,
      img2:img2,
      img3:img3,
      imagefolder:imagefolder,
      description:description
    }
    dispatch(AddToProductOverView(item))
  }
  return (
    <div className='products'>
        <p>{title}</p>
        <div className='price-info'>
            <span>₹ </span>
            <span>{price}</span>
        </div>
        <div className='ratting-info'>
                <p><Rating name="half-rating-read" defaultValue={ratting} precision={0.5} readOnly />
            </p>
        </div>
        <div className='imgdiv' onClick={productOverViews}>
        <img className="productImages" src={img} onClick={()=>navigate("/productView")} />
        {
         open && 
            (<ProductOverView title={title} price={price}  />)
          
        }
        <img className="productImage" src={images} onClick={()=>navigate("/productView")} />
        </div>
        <button onClick={addToBasketHandler}>Add to Cart</button>

    </div>
  )
}

export default Product