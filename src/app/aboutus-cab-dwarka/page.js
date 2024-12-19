"use client"
import Link from 'next/link';
import React from 'react';
import AboutAtoZCab from '../about-atoz-cab/page';
import AtozCabFaq from '../AtoZ-cab-faq/page';
import { OurCoreValues, OurMission, OurVision } from '../../../public/Images/page';
import Image from 'next/image';

const aboutus = () => {
  const categories = [
    {
      title: "Reliable Services",
      description:
        "Customers trust AtoZ Cab Dwarka for punctual and dependable rides across Dwarka, making every journey stress-free.",
    },
    {
      title: "Affordable Pricing",
      description:
        "At Cab Dwarka, we offer transparent pricing with no hidden charges, ensuring you get the best value for your money.",
    },
    {
      title: "Experienced Drivers",
      description:
        "Our professional drivers at AtoZ Cab Dwarka are trained and verified to ensure a safe and smooth travel experience.",
    },
    {
      title: "Safety First",
      description:
        "Cab Dwarka prioritizes your safety with well-maintained cabs and strict safety protocols for every ride.",
    },
    {
      title: "Technology-Driven",
      description:
        "Leverage our user-friendly platform at AtoZ Cab Dwarka to book your rides hassle-free with just a few clicks.",
    },
    {
      title: "24/7 Support",
      description:
        "AtoZ Cab Dwarka offers round-the-clock customer support to assist you with your travel needs anytime, anywhere.",
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('Images/travel-with-atoz-cab2.svg')`,
          backgroundSize: '100% 100%',
          height: '350px',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'relative',
        }}
        className="flex flex-col items-center justify-center text-center py-[50px]"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000000bf',
            zIndex: 1,
          }}
        ></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="text-[25px] lg:text-[55px] font-bold font-titlefont text-white">
            AtoZ Cab - Dwarka
          </h1>
          <p>
            <Link className="text-white" href="/">
              AtoZ Cab / Home
            </Link>
          </p>
        </div>
      </div>


      <div className="lg:max-w-[1440px] m-auto px-[20px] pt-[50px]">
        <div className=' grid gap-[30px] lg:grid-cols-3 grid-cols-1'>
          <div className="bg-white rounded-lg shadow-md p-[20px] text-center">
            <div className="flex justify-center items-center mb-[15px]">
              <Image src={OurMission} alt="Mission-atoz" className="w-[100px] " width={100} />
            </div>
            <h2 className="text-[25px] font-bold mb-[10px] font-titlefont">Our Mission</h2>
            <p className="text-[16px] font-textfont">
              At AtoZ Cab Dwarka, our mission is to be the most trusted and dependable cab service provider in Dwarka. We aim to offer seamless, safe, and high-quality transportation solutions tailored to meet the unique needs of our customers. By redefining cab services in Cab Dwarka, we strive to ensure safety, comfort, and exceptional customer satisfaction in every ride.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-[20px] text-center">
            <div className="flex justify-center items-center mb-[15px]">
              <Image src={OurVision} alt="Mission-atoz" className="w-[100px] " width={100} />
            </div>
            <h2 className="text-[25px] font-bold mb-[10px]  font-titlefont">Our Vision</h2>
            <p className="text-[16px] font-textfont">
              Our vision at AtoZ Cab Dwarka is to establish ourselves as the leading name in the cab industry. By creating a benchmark for reliable, customer-centric, and technology-driven transportation services, we aim to make AtoZ Cab Dwarka the top choice for cab services in Dwarka. Through innovation, trust, and long-term relationships, we are committed to shaping the future of Cab Dwarka services.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-[20px] text-center">
            <div className="flex justify-center items-center mb-[15px]">
              <Image src={OurCoreValues} alt="Mission-atoz" className="w-[100px] " width={100} />
            </div>
            <h2 className="text-[25px] font-bold mb-[10px]  font-titlefont">Our Core Values</h2>
            <ul className="list-disc text-gray-600 text-left pl-[20px] flex flex-col gap-[12px]">
              <li className='text-[16px] font-textfont'>
                <strong>Customer First:</strong> Prioritizing customer safety, satisfaction, and convenience with every ride in Cab Dwarka.
              </li>
              <li className='text-[16px] font-textfont'>
                <strong>Integrity and Transparency:</strong> Maintaining honesty in pricing and services across all AtoZ Cab Dwarka operations.
              </li>
              <li className='text-[16px] font-textfont'>
                <strong>Reliability:</strong> Ensuring stress-free, punctual rides that redefine expectations for cab services in Dwarka.
              </li>
              <li className='text-[16px] font-textfont'>
                <strong>Quality Service:</strong> Offering a well-maintained fleet and professional drivers for a premium experience with Cab Dwarka.
              </li>
              <li className='text-[16px] font-textfont'>
                <strong>Innovation:</strong> Leveraging technology to provide user-friendly cab services tailored for the unique needs of AtoZ Cab Dwarka customers.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <AboutAtoZCab />
      </div>

      <div className="lg:max-w-[1440px] m-auto px-[20px] py-[50px]">
        <div className="text-center mb-12">
          <h1 className="text-[25px] font-titlefont font-semibold lg:text-[30px] text-bluegreen">
            Why Choose AtoZ Cab Dwarka?
          </h1>
          <p className="text-[18px] font-textfont font-normal">
            Discover why <strong>AtoZ Cab Dwarka</strong> is the top choice for all your travel needs in Dwarka and beyond.
          </p>
        </div>

        <div className="grid gap-[30px] lg:grid-cols-3 grid-cols-1">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-[20px] text-center"
            >
              <h2 className="text-[20px] font-bold font-stylefont mb-[10px]">{category.title}</h2>
              <p className="text-gray-600 font-titlefont text-[15px]">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <AtozCabFaq />
      </div>

    </div >
  );
};

export default aboutus;
