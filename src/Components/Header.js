import React,{useState} from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from "react-router-dom";
import { Avatar } from '@mui/material';
import {useSelector} from"react-redux";
import CartPopUp from './CartPopUp';
import SignOut from './SignOut';


function Header() {
  const [open,setOpen]=useState(false)
  const [opens,setOpens]=useState(false)
  const {basket}=useSelector((state)=>state.basket)
  const navigate=useNavigate()
  
  const {user}=useSelector((state)=>state.user)
  return (
    <div className="header">
    <img onClick={()=>navigate("/")} className="logo" src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"alt="logo"/>
    <div className='location'>
      <div className='locationIcon'>
    <i class="fa-solid fa-location-dot"></i>
    </div>
    <div>
    <h3 className='section1'>Hello</h3>
    <h3>Select My Location</h3>
    </div></div>
    <div className='searchBar'>
        <input type="text" />
        <SearchIcon className='searchIcon'/>
    </div>
    <div className="nav-section" >
      <Avatar onClick={()=>setOpen(!open)} src={user?.photoURL} />
      <div>
      <h5 className='section1'>{user?.displayName}</h5> 
      <h5 onClick={()=>navigate("/login")} className='section2'>Sign In</h5>
      </div>
      {open &&
      <SignOut />
    }
    </div>
    
    <div className="nav-section2">
      <span className='section1' >Return</span>
      <span  className='section2'>& Orders</span>
    </div>
    <div className="nav-section3">
      <span className='section1'>Your</span>
      <span className='section2'>Prime</span>
    </div>
    <div className="nav-section1" onClick={()=>navigate("./checkout")}>
    
      
      <span className='section2'>Cart</span>
   
    </div>
    <div className="nav-section1" onClick={()=>setOpens(!opens)}>
    
      <ShoppingCartIcon className='cartIcon' />
      <span className='section2'>{basket?.length}</span>
   
    </div>
    {
      opens && basket?.map((items)=>{
      return(
      <CartPopUp id={items.id} setOpens={setOpens}
      />)
     
    })}
    </div>
  )
}

export default Header