import Image from 'next/image';
import React from 'react'
import { aboutus, dateicon, supporticon } from '../../../public/Images/page';

const AboutAtoZCab = () => {
    return (
        <div className='mt-[50px]' style={{
            backgroundImage: `url('Images/atoz-cab-dwarka-about-us.svg')`,
            backgroundSize: 'cover',
            backgroundAttachment: "fixed"
        }}>
            <div className='text-white'>
                <div className='flex flex-row'>
                    <div className='w-[50%]'>
                        <Image src={aboutus} alt='AtoZ Cab Dwarka' className='w-[100%] h-full' width={100} height={100} />
                    </div>
                    <div className="p-6 w-[50%]">
                        <h2 className='lg:text-[25px] text-[20px] font-stylefont font-semibold '>About Us</h2>
                        <h1 className='lg:text-[30px] text-[25px] font-titlefont font-bold my-[15px]'>Welcome to AtoZ Cab Dwarka – Your Trusted Cab Partner in Dwarka</h1>
                        <p className='text-[18px] font-textfont font-normal mb-[15px]'>
                            At AtoZ Cab Dwarka, we take pride in being the most reliable and
                            professional cab service provider in Dwarka. With a commitment to
                            excellence, we ensure a seamless travel experience for every customer.
                            Whether you need a quick ride to your destination or a well-planned
                            journey, our cab services are tailored to meet your needs.
                        </p>
                        <p className='text-[18px] font-textfont font-normal mb-[15px] border-l-[2px] border-yellow pl-[15px]'>
                            With years of experience in the transportation industry, we have earned
                            the trust of thousands of satisfied customers in Dwarka and beyond. Our
                            reputation as the go-to Dwarka Cab service stems from our dedication to
                            safety, punctuality, and customer satisfaction.
                        </p>
                        <div className='flex flex-col gap-[15px]'>
                            <div className='flex flex-row gap-[5px] items-center'>
                                <p><Image src={dateicon} alt='atoz cab dwarka' className='imageFilter' width={35} height={35} /> </p>
                                <p className='text-[18px] font-stylefont font-normal'>Online Booking</p>
                            </div>

                            <div className='flex flex-row gap-[5px] items-center'>
                                <p><Image src={supporticon} alt='atoz cab dwarka' className='imageFilter' width={40} height={40} /> </p>
                                <p className='text-[18px] font-stylefont font-normal'>24/7 Support</p>
                            </div>
                        </div>

                        <div className='float-left mt-[25px]'>
                            <button className='booking-sectionbtn'>Book a Taxi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAtoZCab;
