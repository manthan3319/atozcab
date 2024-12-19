import Image from 'next/image';
import React from 'react'
import { women } from '../../../public/Images/page';

const TrustedCabService = () => {
    return (
        <div className='mt-[100px] mb-[50px] '>
            <div className='lg:max-w-[1440px] px-[20px] m-auto'>
                <div className='bg-bluegreen flex md:flex-row flex-col items-center px-[20px] rounded-md'>
                    <div className='md:w-[50%] w-[100%] mt-[50px]'>
                        <h2 className='lg:text-[25px] text-[15px] font-stylefont text-yellow font-semibold'>contact us</h2>
                        <h1 className='lg:text-[45px] text-[25px] mt-[25px] font-bold font-titlefont text-white'>We Provide Trusted
                            Cab Service</h1>

                        <div className='float-left mt-[20px]'>
                            <button className='booking-sectionbtn'>Book a Taxi</button>
                        </div>
                    </div>
                    <div className='md:w-[50%] w-[100%] md:mt-[-50px] mt-[-30px] right-0 text-right'>
                        <Image src={women} alt='Trusted-cab-atoz' width={100} height={100} className='w-[80%] md:m-auto float-right' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TrustedCabService;