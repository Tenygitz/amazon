
import React,{useState} from 'react';
import { auth } from '../Firebase';
import Header from './Header';
import "./LoginPage.css";
import {useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword, } from "firebase/auth";
import Footer from './Footer';


function LoginPage() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const loginHandler=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then((auth)=>{
       navigate("/")
      }).catch((e)=>{
        alert(e.message)
 })
    }
    
  return (<>
  <Header/>
    <div className='LoginPage'>
     
        <img className='LoginPage-logo' src='https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png' />
       
    <div className='LoginPage-Details'>
    <h1>Sign In</h1>
    <form>
        <h4>Email</h4>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email'/>
        <h4>Password</h4>
        <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='*******'/>
        <button onClick={loginHandler} type="submit">Sign In</button>
    </form>
    
    <p><input type='checkbox'/> By Sign you agree to Amazons Conditions of Use and Sale. Please see our privacy notice, Our cookies notice and our Interest-based Ads Notice </p>
    <button onClick={()=>navigate("/signup")}>Create Amazon Account</button>
    </div>
 
    </div>
    <Footer/>
    </>
  )
}

export default LoginPage