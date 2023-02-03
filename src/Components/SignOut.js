import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {useSelector} from"react-redux";
import {useDispatch} from"react-redux";
import {logout} from "../redux/cart";
import { Avatar} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import "./SignOut.css"

function SignOut() {
    const {user}=useSelector((state)=>state.user)
    const navigate=useNavigate()
    const dispatch=useDispatch()
   
    const logoutHandler=()=>{
        dispatch(logout());
        const auth = getAuth();
     signOut(auth).then(() => {
       // Sign-out successful.
       navigate("/login")
     }).catch((error) => {
       // An error happened.
     });}
  return (
    <div className='SignOut'>
      <div className='signout-avatar'>
          <Avatar src={user?.photoURL}></Avatar>
        <div className='signout-info'>
            <h3>{user?.displayName}</h3>
            <h4 className='signout-font'>{user?.email}</h4>
        </div></div>
        <button>View Profile</button>
        <hr/>
        <h2>Account</h2>
        <div className="premium">
            <PaymentIcon className='paymenticon'></PaymentIcon>
        <h5>Try Premium For free</h5>
        </div>
        <h4>Help</h4>
        <h4>Setting & Privacy</h4>
        <h4>Language</h4>
        <hr/>
        <button onClick={logoutHandler}>Sign Out</button>
    </div>
  )
}

export default SignOut