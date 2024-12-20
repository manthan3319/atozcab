"use client";
import React from 'react';
import { WhyChooesUsContent } from '../AtoZ-Cab-Data/page';
import Image from 'next/image';

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
          {WhyChooesUsContent.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-2xl flex flex-col justify-between rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                  width={50}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 transition-opacity duration-500 ease-in-out hover:opacity-0"></div>
              </div>

              <div className="p-8">
                <h3 className="text-[20px] font-stylefont font-semibold m">{item.title}</h3>
                <p className="text-[17px] font-textfont font-normal mt-[12px]">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooesUs;
