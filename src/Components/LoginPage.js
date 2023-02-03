
import React,{useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import "./LoginPage.css";
import Footer from './Footer';


function LoginPage() {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const loginHandler=(e)=>{
      e.preventDefault()
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user= userCredential.user;
      // ...
      navigate("/");
    })
    .catch((error) => {
      alert(error.message)
    });
  
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