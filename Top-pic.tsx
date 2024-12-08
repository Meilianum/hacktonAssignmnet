 import React from 'react';

function Toppicker() {
    return (
      <div>
        <h1 className="font-poppins text-[36px] font-medium leading-[54px] underline-offset-4 decoration-none text-center">
          Top Picks For You
        </h1>
        
        <h2 className='font-poppins text-[18px] font-medium leading-[27px] text-center'>
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          
        </h2>
        
        <div className='flex justify-center '>
            <img src="/image/Group 15.svg" alt="Tableset" />
            <img src="/image/Group 16.svg" alt="tableset" />
            <img src="/image/Group 17.svg" alt="teakmirr0r=" />
            <img src="/image/Group 18.svg" alt="sofa" />
        </div>
        <h3 className='text-center text-3xl  p-20'>View More</h3>
        <div className='bg-[#FFF9E5]  w-[1440px] grid grid-cols-2 pt-10 m-10'>
     <img src="/image/Asgaard sofa 1.svg" alt="Asgaard sofa" />
     
     <div className='  inline-block w-[1440px] h-[639px] top-[2496px] left-[0px]  m-40 '>
      <img src="/image/Group 22.svg" alt="" />
     </div>
    
    

        </div>
        </div>
    
    );
  }
  
  export default Toppicker;
  