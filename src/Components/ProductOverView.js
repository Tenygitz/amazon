import React,{useState} from 'react';
import Header from './Header';
import Rating from '@mui/material/Rating';
import "./ProductOverView.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from './Footer';
import { useStateValue } from '../StateProvider';

function ProductOverView({id,title,ratting,price,img,setShow}) {
  //  const [{basket},dispatch]=useStateValue();
  const images=["https://m.media-amazon.com/images/I/61jLiCovxVL._SX679_.jpg",
"https://m.media-amazon.com/images/I/71rswJs9W9L._SX679_.jpg",
"https://m.media-amazon.com/images/I/61Tda9m5UUL._SX679_.jpg",
"https://m.media-amazon.com/images/I/7161nwSVX9L._SX679_.jpg"]
const [selectImg,setSelectImg]=useState(0)
  console.log("ggg",title)
    const showHandler=()=>{
     
 setShow(true)
    }
    // const addCartHandler=()=>{
    //   dispatch({
    //     type:"Add_To_Cart",// adding thisactionto reducer function
    //     item:{
    //       id:id,
    //       title:title,
    //       ratting:ratting,
    //       price:price,
    //       img:img
    //     }
    //    })
    // }
  return (<>
  <Header/>
    <div className='ProductOverView' onClick={showHandler}>
      <div className='left'>
        <img src={images[0]}onClick={()=>setSelectImg(0)} alt="product image"/>
        <img src={images[1]}onClick={()=>setSelectImg(1)} alt="product image"/>
        <img src={images[2]}onClick={()=>setSelectImg(2)} alt="product image"/>
        <img src={images[3]}onClick={()=>setSelectImg(3)} alt="product image"/>
        </div>
        <div className='mainImg'>
         <img src={images[selectImg]}/>
        </div>
        <div className='ProductOverView-container'>
           <h1>Apple iPhone 13 Pro (256GB) - Sierra Blue</h1>
           <div className='price-info'>
            <span>₹ </span>
            <span>1,19,900</span>
        </div>
        <div className='ratting-info'>
                <p><Rating name="half-rating-read" defaultValue={ratting} precision={0.5} readOnly />
            </p>
        </div>
        <div className='about-item'>
          <h3>About Item</h3>
          <p>15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel
Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording
12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
A15 Bionic chip for lightning-fast performance</p>
        </div>
        <button  className='CartBtn'>Add Cart  <ShoppingCartIcon  /></button>
      
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductOverView