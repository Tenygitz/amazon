import React,{useState} from 'react';
import "./HomePage.css";
import Product from "./Products";
import Header from "./Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ProductOverView from './ProductOverView';
import Footer from './Footer';
function HomePage() {
  let [show,setShow]=useState(false)
  return (<>
    <div className='homepage'>
      <Header/><Carousel className="carousel" autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={5000}>
        <img  className="homepage-img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="BannerImage"/>
        <img  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/AugART/Teaser/PC/revised/V1/FIle-1_PC_01.jpg" alt="BannerImage"/>
        <img  src="https://m.media-amazon.com/images/I/81pXJW9qztL.jpg" alt="BannerImage"/>
        </Carousel>
        <div className='rows'>
        <Product id={1} title={"Apple iPhone 13 Pro"} price={109900} ratting={5} img={"https://m.media-amazon.com/images/I/61rrisp8qiL._SX679_.jpg"}/>
        {show && <ProductOverView id={1} setShow={setShow} title={"Apple iPhone 13 Pro"} price={109900} ratting={5} img={"https://m.media-amazon.com/images/I/61rrisp8qiL._SX679_.jpg"}/>}
        <Product id={2} title={"Apple iPad Pro"} price={67390} ratting={4.5} img={"https://m.media-amazon.com/images/I/815KnP2wjDS._SX679_.jpg"}/>
        <Product id={3} title={"Redmi Note 11T 5G "} price={15999} ratting={4} img={"https://m.media-amazon.com/images/I/71hBRAcpDnL._SX679_.jpg"}/>
        <Product id={4} title={"iQOO Z6 Pro 5G"} price={20999} ratting={3.5} img={"https://m.media-amazon.com/images/I/61E4zA32FrL._SX569_.jpg"}/>
        <Product id={5} title={"OnePlus 10 Pro 5G"} price={60999} ratting={3.5} img={"https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg"}/>
        </div>
        <div className='rows'>
        <Product id={6} title={"Samsung Galaxy Book2 Intel 12th Gen core i7 "} price={74990} ratting={3} img={"https://m.media-amazon.com/images/I/61WvrP9Fz-L._SX679_.jpg"}/>
        <Product id={7} title={"Samsung S22 Ultra"} price={99999} ratting={5} img={"https://images-eu.ssl-images-amazon.com/images/I/41QPv5h1veL._SX300_SY300_QL70_FMwebp_.jpg"}/>
        <Product id={8} title={"Samsung Galaxy Watch5 Bluetooth"} price={30900} ratting={2.5} img={"https://m.media-amazon.com/images/I/61O5Xjb9uEL._SX450_.jpg"}/>
        <Product id={9} title={"HP Pavilion Aero AMD Ryzen 5"} price={70900} ratting={2} img={"https://m.media-amazon.com/images/I/71mX6qUGIIL._SX679_.jpg"}/>
        </div>
        <div className='rows'>
        <Product id={10} title={"JBL Pulse 4 Speaker"} price={16999} ratting={4} img={"https://www.shopkees.com/cdn/images/1000/5463813451_1614672473.jpg"}/>
        <Product id={11} title={"HP Pavilion Gaming 5th Gen AMD"} price={66999} ratting={3} img={"https://images-eu.ssl-images-amazon.com/images/I/412hYHFcGjL._SX300_SY300_QL70_FMwebp_.jpg"}/>
        <Product id={12} title={"Sony Bravia 139 cm (55 inches) 4K Ultra HD"} price={60999} ratting={4.5} img={"https://m.media-amazon.com/images/I/71ZKGDdz1lL._SX450_.jpg"}/>
        <Product id={13} title={"Mi 189.34cm (75 inches) Q1 Series"} price={126999} ratting={3.5} img={"https://m.media-amazon.com/images/I/71fZOKh0i1L._SY450_.jpg"}/>
        </div>
       
       
    </div><Footer/>
    </>


  )

  }
export default HomePage