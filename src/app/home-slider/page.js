import Image from 'next/image';
import React from 'react';
import { dwarkacab } from '../../../public/Images/page'; // Image import
import Link from 'next/link';

const HomeSlider = () => {
  return (
    <div className="bg-lightyellow before:h-full overflow-hidden main-slider before:right-0 relative wave-container">
      <div className="lg:max-w-[1440px] px-[20px] m-auto">
        <div className="h-[100vh] flex justify-center items-center">
          <div className="w-[50%]">
            {/* Main Heading with keyword */}
            <h1 className="text-[45px] text-white font-bold font-titlefont mb-[15px]">
              Reserve your taxi from any location in <span className='text-bluegreen'>Dwarka!</span>
            </h1>
            
            <p className='text-[18px] font-textfont'>
              Looking for reliable taxi services in Dwarka? <b>AtoZ Cab Dwarka</b>  offers a seamless and comfortable experience for all your travel needs. Book your taxi now and travel hassle-free!
            </p>
            
            <Link href="/" className='custom-book-taxi2 inline-block mt-[30px] bg-bluegreen'>
              Discover More About AtoZ Cabs in Dwarka
            </Link>
          </div>
          
          <div className="w-[50%]">
            <Image 
              src={dwarkacab} 
              alt="AtoZ Cab Dwarka - Book your taxi for a safe and comfortable ride" 
              className='w-[100%] relative z-[99]' 
              width={100} 
              height={100} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
