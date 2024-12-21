'use client';
import React, { useState } from 'react';
import { WhyChooesUsContent } from '../AtoZ-Cab-Data/page';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WhyChooesUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="lg:max-w-[1440px] px-4 m-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <p className="text-[20px] lg:text-[25px] font-stylefont font-semibold text-yellow">PLAN YOUR TRIP</p>
          <h1 className="text-[25px] font-titlefont font-semibold lg:text-[30px] text-bluegreen">
            Why Choose Atoz Cab Dwarka
          </h1>
          <p className="text-[18px] font-textfont font-normal">
            Discover why Atoz Cab Dwarka is the top choice for all your travel needs in Dwarka and beyond.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WhyChooesUsContent.map((item) => {
            const [imageLoaded, setImageLoaded] = useState(false);

            return (
              <div
                key={item.id}
                className="bg-white shadow-2xl flex flex-col justify-between rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
              >
                <div className="relative overflow-hidden">
                  {!imageLoaded && (
                    <Skeleton
                      baseColor="#f3f3f3"
                      highlightColor="#ecebeb"
                      className="absolute inset-0"
                      height="250px"
                    />
                  )}
                  <Image
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-[250px] object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    width={50}
                    onLoadingComplete={() => setImageLoaded(true)}
                  />
                 
                </div>

                <div className="p-8">
                  <h3 className="text-[20px] font-stylefont font-semibold m">{item.title}</h3>
                  <p className="text-[17px] font-textfont font-normal mt-[12px]">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooesUs;
