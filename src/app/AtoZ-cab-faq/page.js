"use client"
import React, { useState } from 'react';
import { AtoZFaq } from '../AtoZ-Cab-Data/page';
import Image from 'next/image';
import { downicon, faqbg } from '../../../public/Images/page';

const AtozCabFaq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='overflow-hidden' style={{
            backgroundImage: `url('Images/faq-background-atoz-cab.svg')`,
            backgroundSize: 'cover',
            backgroundAttachment: "fixed"
        }}>
            <div className="lg:max-w-[1440px] m-auto">
                {/* FAQ Section */}
                <div className="flex md:flex-row  flex-col ">
                    <div className='md:w-[50%] w-[100%] py-[50px] px-[20px]'>
                        <div className="flex flex-row gap-[15px] justify-between mb-8">
                            <div className="">
                                <p className="text-[20px] font-semibold font-stylefont text-yellow">Have any questions?</p>
                                <h2 className="text-[25px] lg:text-[30px] font-titlefont font-semibold text-lightyellow">Frequently Asked Questions</h2>
                            </div>
                        </div>
                        <div className=''>
                            {AtoZFaq.map((item, index) => (
                                <div key={index} className="mb-[20px]">
                                    <div
                                        onClick={() => toggleFAQ(index)}
                                        className="cursor-pointer flex items-center justify-between mb-[7px] pb-[7px] border-b-[1px] border-gray"
                                    >
                                        <h3 className="text-[18px] font-titlefont font-semibold text-white">
                                            {index + 1}. {item.question}
                                        </h3>
                                        <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                            <Image src={downicon} alt='atoz-cab-dwarka-faq' className='imageFilter' width={30} height={30} />
                                        </span>
                                    </div>
                                    {openIndex === index && (
                                        <div className="bg-gray-50">
                                            <p className="text-[16px] text-[#d9d5d5]">{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='md:w-[50%] w-[100%] faqs-section relative'>
                        <div className='faqs-section_image bg-gray h-full'>
                           
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtozCabFaq;
