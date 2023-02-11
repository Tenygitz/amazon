import React from 'react';
import { Avatar} from '@mui/material';
import { getAuth, signOut } from "firebase/auth";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CancelIcon from '@mui/icons-material/Cancel';
import {useSelector} from"react-redux";
import {useDispatch} from"react-redux";
import {logout} from "../redux/cart";
import { useNavigate } from 'react-router-dom';
import "./UserDetails.css";

function UserDetails({setShow}) {
    const {user}=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    const navigate=useNavigate()
   
    const logoutHandler=()=>{
        dispatch(logout());
        const auth = getAuth();
     signOut(auth).then(() => {
       // Sign-out successful.
       navigate("/login")
     }).catch((error) => {
       // An error happened.
     });}
    const closeHandler=()=>{
        setShow(false)
       }
  return (
    
        <div className='UserDetails'>
            <div className='UserDetails-container'>
                <div className='userDetails-info'>
                <div className='userDetails-profileinfos'>
                    <div className='userDetails-profileinfo'>
                        <Avatar src={user?.photoURL}/>
                        <h2>Hello,</h2>
                        <h2>{user?.displayName}</h2>
                        </div>
                        <div>
                            <CancelIcon onClick={closeHandler}/>
                        </div>
                    </div>
                    <div className='userDetails-infoContent'>
                      <h3>Trending</h3>
                      <h5>Best Seller</h5>
                      <h5>New Releases</h5>
                      <h5>Movers and Shakers</h5>
                    </div>
                    <hr/>
                    <div className='userDetails-infoContent'>
                      <h3>Digital Content And Devices</h3>
                    <div className='userDetails-infoContents'>
                      <h3>Echo & Alexa</h3>
                      <ArrowForwardIosIcon/>
                    </div>
                    <div className='userDetails-infoContents'>
                        <h3>Fire Tv</h3>
                         <ArrowForwardIosIcon/>
                    </div>
                    <div className='userDetails-infoContents'>
                      <h3>kindle E-reader & E-book</h3>
                      <ArrowForwardIosIcon/>
                    </div>
                    <div className='userDetails-infoContents'>
                      <h3>Movers and Shakers</h3>
                      <ArrowForwardIosIcon/>
                    </div>
                    <div className='userDetails-infoContents'>
                      <h3>Audible Audiobooks</h3>
                      <ArrowForwardIosIcon/>
                    </div>
                    <div className='userDetails-infoContents'>
                      <h3>Amazon Prime Video</h3>
                      <ArrowForwardIosIcon/>
                    </div>
                    <div className='userDetails-infoContents'>
                      <h3>Amazon Prime Music</h3>
                      <ArrowForwardIosIcon/>
                    </div>
                    </div>
                      <hr/>
                    <div className='userDetails-infoContent'>
                      <h3>Shop By Category</h3>
                      <div className='userDetails-infoContents'>
                      <h3>Mobiles,Computers</h3>
                      <ArrowForwardIosIcon/>
                    </div>
                      <div className='userDetails-infoContents'>
                      <h3>Tv,Appliance,Electronics</h3>
                      <ArrowForwardIosIcon/>
                    </div>
                      <div className='userDetails-infoContents'>
                      <h3>Men's Fashion</h3>
                      <ArrowForwardIosIcon/>
                    </div>
                      <div className='userDetails-infoContents'>
                      <h3>Women's Fashion</h3>
                      <ArrowForwardIosIcon/>
                    </div>
                    </div>
                      <hr/>
                    <div className='userDetails-infoContent'>
                      <h3>Help & Settings</h3>
                      <h5>Your Account</h5>
                      <h5>Customer Service</h5>
                      <h5 onClick={logoutHandler}>Sign Out</h5>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default UserDetails