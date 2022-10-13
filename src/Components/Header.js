import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../StateProvider';
import {useNavigate} from "react-router-dom";
function Header() {
  const navigate=useNavigate()
  const [{basket}]=useStateValue();
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
    <div onClick={()=>navigate("/login")} className="nav-section">
      <span className='section1'>Teny</span>
      <span className='section2'>Sign In</span>
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
    
      <ShoppingCartIcon className='cartIcon' />
      <span className='section2'>{basket?.length}</span>
   
    </div>
    </div>
  )
}

export default Header