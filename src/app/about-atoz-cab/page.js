import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { aboutus, dateicon, supporticon } from '../../../public/Images/page';
import { useInView } from 'react-intersection-observer';

const AboutAtoZCab = () => {
  // Animation for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      className="mt-[50px]"
      style={{
        backgroundImage: `url('Images/atoz-cab-dwarka-about-us.svg')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <motion.div
        ref={ref}
        className="text-white"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="flex flex-wrap lg:flex-row flex-col items-center lg:justify-between">
          {/* Left Side Image */}
          <div className="w-full lg:w-[45%] mb-[30px] lg:mb-0 flex justify-center">
            <Image
              src={aboutus}
              alt="AtoZ Cab Dwarka"
              className="w-full h-auto object-cover"
              width={100}
              height={100}
            />
          </div>

          {/* Right Side Content */}
          <div className="p-6 w-full lg:w-[50%] flex flex-col justify-between">
            <h2 className="lg:text-[25px] text-[20px] xl:text-[45px] font-stylefont font-semibold">
              About Us
            </h2>
            <h1 className="lg:text-[30px] text-[25px] font-titlefont font-bold my-[15px]">
              Welcome to AtoZ Cab Dwarka – Your Trusted Cab Partner in Dwarka
            </h1>
            <p className="text-[18px] 2xl:text-[20px] font-textfont font-normal mb-[15px]">
              At AtoZ Cab Dwarka, we take pride in being the most reliable and
              professional cab service provider in Dwarka. With a commitment to
              excellence, we ensure a seamless travel experience for every customer.
              Whether you need a quick ride to your destination or a well-planned
              journey, our cab services are tailored to meet your needs.
            </p>
            <p className="text-[18px] 2xl:text-[20px] font-textfont font-normal mb-[15px] border-l-[2px] border-yellow pl-[15px]">
              With years of experience in the transportation industry, we have earned
              the trust of thousands of satisfied customers in Dwarka and beyond. Our
              reputation as the go-to Dwarka Cab service stems from our dedication to
              safety, punctuality, and customer satisfaction.
            </p>

            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-row gap-[5px] items-center">
                <p>
                  <Image
                    src={dateicon}
                    alt="atoz cab dwarka"
                    className="imageFilter"
                    width={35}
                    height={35}
                  />
                </p>
                <p className="text-[18px] font-stylefont font-normal">Online Booking</p>
              </div>

              <div className="flex flex-row gap-[5px] items-center">
                <p>
                  <Image
                    src={supporticon}
                    alt="atoz cab dwarka"
                    className="imageFilter"
                    width={40}
                    height={40}
                  />
                </p>
                <p className="text-[18px] font-stylefont font-normal">24/7 Support</p>
              </div>
            </div>

            <div className="float-left mt-[25px]">
              <button className="booking-sectionbtn">Book a Taxi</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutAtoZCab;
