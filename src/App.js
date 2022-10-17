
import './App.css';

import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from './Components/CheckoutPage';
import LoginPage from './Components/LoginPage';
import React,{useEffect} from "react";
import { useStateValue } from './StateProvider';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';
import SignUpPage from './Components/SignUpPage';
import ProductOverView from './Components/ProductOverView';

function App() {
const [{user},dispatch]=useStateValue();

useEffect(()=>{

const unsubscribe = onAuthStateChanged(auth,(authUser)=>{ // check if user is logged in or not
  if(authUser){
     dispatch({
      type:"Set_User",
      user:authUser
   })
    }
    else{
     dispatch({
      type:"Set_User",
      user:null
    })
  }
  return()=>{
    unsubscribe()
  }
})

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
