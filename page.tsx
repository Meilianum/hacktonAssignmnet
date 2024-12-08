"use client"; 
import React from 'react';
import Header from "@/components/Header";  

import Toppicker from '@/components/Top-pic';
import OurBlog from '@/components/Our-Blog';
import Ourinstagram from '@/components/Ourinstagram';
import App from '@/components/App';
import Shop from '@/components/Shop';
// import Cart from '@/components/Cart';
// import Unique from '@/components/Unique';


function header() {  
  return (
    <div>
      <Header />
      <Toppicker />
      <OurBlog />
      <Ourinstagram/>
      <App/>
      <Shop/>
  {/* <Unique /> */}
  {/* <Cart/> */}
    </div>
  );
}

export default header;  

       
        

