import React,{useState}from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import UserDetails from './UserDetails';
import "./HeaderBottom.css";

function HeaderBottom() {
    const [show,setShow]=useState(false)
  return (
    <div className='HeaderBottom'>
        <div  onClick={()=>setShow(!show)} className='HeaderProfile'>
        <DehazeIcon/>
        <h4>All</h4>
        </div>
        {
            show && <UserDetails setShow={setShow}/>
        }
        <h3>Fresh</h3>
        <h3>Amazon miniTv</h3>
        <h3>Amazon Pay</h3>
        <h3>Gift Ideas</h3>
        <h3>Gift Cards</h3>
        <h3>Buy Again</h3>
        <h3>Health, Household & Personal Care</h3>
    </div>
  )
}

export default HeaderBottom