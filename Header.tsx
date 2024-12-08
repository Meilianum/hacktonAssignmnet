import React from 'react';
import { MdManageAccounts } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
function Header() {
  return (
    <div className='border-2 bg-[#FBEBB5]  w-full mx-auto '>
        <img src="/image/Group 5.svg" alt="header" />
        {/* <ol className= "flex justify-evenly font-bold text-black "
      style={{
        width: '430px',
        height: '24px',
        top: '38px',
        left: '505px',
        // gap: '50px',
        position: 'absolute',
      }}
    >

            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        
        <MdManageAccounts  className=' size-5  w- [853px] h-[10px] left-[1440px] gap-[0px] angle-[-180deg]' 
        
        />
        <FaSearch  className=' size-10 w- [853px] h-[10px] left-[1440px] gap-[0px]  angle-[-180deg]' 
       
        />
        <FaRegHeart  
        className=' size-10 w- [853px] h-[10px] left-[1440px] gap-[0px] angle-[-180deg]'
        />

<FaCartArrowDown className= 'size-10 w- [853px] h-[10px] left-[1440px] gap-[0px] angle-[-180deg]' />
        
        </ol> */}

      <section className="text-gray-600 body-font">
        <div className=" <FaCartArrowDown  className=' h-left-[1440px] gap-[0px] angle-[-180deg]'container w-full mx-auto flex   md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font- text-gray-900  ms-10 mx-14 " >
             <img src="/image/Group 4.svg" alt="" />
              {/* <br className="hidden lg:inline-block  gap-10" /> */}
              {/* Seater */}
             </h1> 
           
          {/* <a href="/home" className="mx- 4 underline ms-10 mx-2 ">ShopNow</a> */}
           
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/image/Rocket single seater 1.svg"
            />
          </div>
        </div>
      </section>
      <div className='flex justify-end gap-10 p-10 bg-white'>
        <img src="/image/Group 9.svg" alt="" />
        <img src="/image/Group 8.svg" alt="" />
      </div>
    </div>
  );
}

export default Header;
