import React,{useState} from 'react';
import Header from './Header';
import Rating from '@mui/material/Rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Footer from './Footer';
import {useSelector} from"react-redux";
import {useDispatch} from"react-redux";
import {AddToCart} from "../redux/basket";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./ProductOverView.css";


function ProductOverView() {
  const {productOverView}=useSelector((state)=>state.basket)
  const dispatch=useDispatch()
  const addToBasketHandler=()=>{
    const item={
       id:productOverView.id,
       title:productOverView.title,
       ratting:productOverView.ratting,
       price:productOverView.price,
       img:productOverView.img
     }
     dispatch(AddToCart(item))
   }
const [selectImg,setSelectImg]=useState(0)
   const description=productOverView.description
  console.log("gtttt",productOverView)
  return (<>
  <Header/>
    <div className='ProductOverView' >
      <div className="leftdiv">
        <div className='left'>
        <img src={productOverView.imagefolder[0]}onClick={()=>setSelectImg(0)} alt="product image"/>
        <img src={productOverView.imagefolder[1]}onClick={()=>setSelectImg(1)} alt="product image"/>
        <img src={productOverView.imagefolder[2]}onClick={()=>setSelectImg(2)} alt="product image"/>
        <img src={productOverView.imagefolder[3]}onClick={()=>setSelectImg(3)} alt="product image"/>
        </div>
        <div className='mainImg'>
         <img src={productOverView.imagefolder[selectImg]}/>
        </div>
        </div>
        <div className='ProductOverView-container'>
           <h1>{productOverView.title}</h1>
           <div className='price-info'>
            <span>₹ </span>
            <span>{productOverView.price}</span>
        </div>
        <div className='ratting-info'>
                <p><Rating name="half-rating-read" defaultValue={productOverView.ratting} precision={0.5} readOnly />
            </p>
        </div>
        <div className='about-item'>
          <h3>About this item</h3>
         {
           description?.map((items,index)=>{
            return(
              <div className='AboutItem-info'>
                <FiberManualRecordIcon className="article-icon"/>
                <p>{items}</p>
              </div>
            )
           })
         }
        </div>
        <button onClick={addToBasketHandler} className='CartBtn'>Add Cart  <ShoppingCartIcon  /></button>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductOverView