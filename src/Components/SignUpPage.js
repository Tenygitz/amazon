
import React,{useState} from 'react';
import Header from './Header';
import "./SignUpPage.css";
import {createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { auth, db } from '../Firebase';
import Footer from './Footer';


function SignUpPage() {
    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const registerHandler=(e)=>{
             e.preventDefault()
             createUserWithEmailAndPassword(auth,email,password).then((result)=>{
                result.updateProfile({displayName:name}).then (()=>{
                db.collection("user").add({
                    id:result.user.uid,
                    username:name,
                    password:password,
                    phoneNumber:number,
                    email:email
                })
                })
             })
    }
  return (<>
  <Header/>
    <div className='SignUpPage'>
    <img className='LoginPage-logo' src='https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png' />
    <div className='Signup-container'>
        <h1>Create Account</h1>
        <form>
            <h4>Your name</h4>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Your name'/>
            <h4>Mobile number</h4>
            <input value={number} onChange={(e)=>setNumber(e.target.value)}type="number" placeholder='Your Phone Number'/>
            <h4>Email</h4>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Your email'/>
            <h4>Password</h4>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="email" placeholder='******'/>
            <button onClick={registerHandler} type="submit">Sign In</button>
        </form>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignUpPage