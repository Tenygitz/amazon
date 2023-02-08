import React,{useState} from 'react';
import Header from './Header';
import {createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import {  ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { auth, db } from '../Firebase';
import { doc, setDoc } from "firebase/firestore";
import {storage} from "../Firebase";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import "./SignUpPage.css";


function SignUpPage() {
    const navigate=useNavigate()
    const [displayName,setdisplayName]=useState("")
    const [number,setNumber]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const[upload,setUpload]=useState(null)
    const registerHandler=async(e)=>{
             e.preventDefault()
           
             try{
              const res=await createUserWithEmailAndPassword(auth, email, password);
              const storageRef = ref(storage,`${ displayName}`);
             
              await uploadBytesResumable(storageRef, upload).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                  try {
                    //Update profile
                    await updateProfile(res.user, {
                      displayName,
                      photoURL: downloadURL,
                    });
                    //create user on firestore
                    await setDoc(doc(db, "users", res.user.uid), {
                      uid: res.user.uid,
                      displayName,
                      email,
                      photoURL: downloadURL,
                      phone:number,
                      password:password
                    });
                   
                   navigate("/")
                  
                  } catch (err) {
                    alert(err.message);
                
                  }
                });
              });
            } catch (err) {
              alert(err.message);
              
          
            }
          };
  return (<>
  <Header/>
    <div className='SignUpPage'>
    <img className='LoginPage-logo' src='https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png' />
    <div className='Signup-container'>
        <h1>Create Account</h1>
        <form>
            <h4>Your name</h4>
            <input onChange={(e)=>setdisplayName(e.target.value)} type="text" placeholder='Your name'/>
            <h4>Mobile number</h4>
            <input  onChange={(e)=>setNumber(e.target.value)}type="number" placeholder='Your Phone Number'/>
            <h4>Email</h4>
            <input  onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Your email'/>
            <h4>Upload File</h4>
            <input type="file"  onChange={(e)=>setUpload(e.target.files[0])} required/>
            <h4>Password</h4>
            <input onChange={(e)=>setPassword(e.target.value)} type="email" placeholder='******'/>
            <button onClick={registerHandler} type="submit">Sign In</button>
        </form>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignUpPage