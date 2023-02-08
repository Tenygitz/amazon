import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from './Components/CheckoutPage';
import LoginPage from './Components/LoginPage';
import React,{useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignUpPage from './Components/SignUpPage';
import ProductOverView from './Components/ProductOverView';
import {useSelector} from"react-redux";
import {useDispatch} from"react-redux";
import {login,logout} from "./redux/cart";
import './App.css';


function App() {
const {user}=useSelector((state)=>state.user)
console.log("thrrr", user);
const dispatch=useDispatch()

useEffect(()=>{

  const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
    const uid = user.uid;
    dispatch(login({
              uid:user.uid,
              displayName:user.displayName,
              email:user.email,
              photoURL:user.photoURL,
                  }))
    } else {
    // User is signed out
    dispatch(logout())
    }
  });

},[])
console.log("userr",user)

  return (
    <Router>
    <div className="App">
     <Routes>
     <Route path="/" element={ <HomePage/>}/>
     <Route path="/checkout" element={ <CheckoutPage/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/signup" element={<SignUpPage/>}/>
     <Route  path="/productView" element={<ProductOverView/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
