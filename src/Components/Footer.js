import React from 'react';
import "./Footer.css";

function Footer() {
  const scrollUp=()=>{
      window.scrollTo({
          top:0,
          behavior:"smooth"
      })
  }
  return (
    <div className='Footer'>
      <div onClick={scrollUp} className='Ontop'>
        <button >Back to Top <i class="fa-solid fa-circle-up"></i></button>
      </div>
      <div className='Links'>
        <div className='Links-container1'>
            <h2>Get to Know Us</h2>
            <div className='Links-info'>
                <ul>
              <li> <a href="">About Us</a></li> 
              <li> <a href="">Careers</a></li> 
              <li> <a href="">Press Releases</a></li> 
              <li> <a href="">Amazon Science</a></li> 
                </ul>
            </div>
        </div>
        <div className='Links-container1'>
            <h2>Connect with Us</h2>
            <div className='Links-info'>
                <ul>
               <li> <a href="">Facebook</a></li>
               <li> <a href="">Twitter</a></li>
               <li><a href="">Instagram</a></li>
               <li><a href="">Youtube</a></li>
                </ul>
            </div>
        </div>
        <div className='Links-container2'>
            <h2>Make Money with Us</h2>
            <div className='Links-info'>
                <ul>
               <li> <a href="">Sell on Amazon</a></li>
               <li> <a href="">Sell under Amazon Accelerator</a></li>
               <li><a href="">Amazon Global Selling</a></li>
               <li> <a href="">Become an Affiliate</a></li>
               <li> <a href="">Fulfilment by Amazon</a></li>
               <li><a href="">Advertise Your Products</a></li>
               <li><a href="">Amazon Pay on Merchants</a></li>
                </ul>
            </div>
        </div>
        <div className='Links-container2'>
            <h2>Let Us Help You</h2>
            <div className='Links-info'>
                <ul>
               <li> <a href="">COVID-19 and Amazon</a></li>
               <li> <a href="">Your Account</a></li>
               <li><a href="">Returns Centre</a></li>
               <li> <a href="">100% Purchase Protection</a></li>
               <li> <a href="">Amazon App Download</a></li>
               <li><a href="">Amazon Assistant Download</a></li>
               <li><a href="">Help</a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className='Footer-wrap'>
      <div className='Footer1'>
       <img src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png" alt="logo"/>
       <div className='language'>
       <i class="fa-solid fa-globe"></i>
          <h1>English</h1>
          <i class="fa-sharp fa-solid fa-cloud-arrow-down"></i>
       </div></div>
       <div className='country'>
        <span>Australia</span>
        <span>Brazil</span>
        <span>Canada</span>
        <span>China</span>
        <span>France</span>
        <span>Germany</span>
        <span>Italy</span>
        <span>Japan</span>
        <span>Mexico</span>
        <span>Netherlands</span>
        <span>Poland</span>
        <span>Singapore</span>
        <span>Spain</span>
        <span>Turkey</span>
        <span>United Arab Emirates</span>
        <span>United Kingdom</span>
        <span>United States</span>
      

       </div>
      </div>
      <div className='Footer-end'>
        <div className='Footer-end-content'>
          <span> Conditions of Use & Sale</span>
          <span> Privacy Notice</span>
          <span> Interest-Based Ads</span>
        </div>
        <h3>© 1996-2022, Amazon.com, Inc. or its affiliates</h3>
      </div>
    </div>
  )
}

export default Footer