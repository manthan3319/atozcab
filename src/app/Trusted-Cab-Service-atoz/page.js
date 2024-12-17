import Image from 'next/image';
import React from 'react'
import { women } from '../../../public/Images/page';

const TrustedCabService = () => {
    return (
        <div className='mt-[100px] mb-[50px] '>
            <div className='lg:max-w-[1440px] px-[20px] m-auto'>
                <div className='bg-bluegreen flex flex-row items-center px-[50px] rounded-md'>
                    <div className='w-[50%] mt-[50px]'>
                        <h2 className='text-[25px] font-stylefont text-yellow font-semibold'>contact us</h2>
                        <h1 className='text-[45px] mt-[25px] font-bold font-titlefont text-white'>We Provide Trusted
                            Cab Service</h1>

                        <div className='float-left mt-[20px]'>
                            <button className='booking-sectionbtn'>Book a Taxi</button>
                        </div>
                    </div>
                    <div className='w-[50%] mt-[-50px]'>
                        <Image src={women} alt='Trusted-cab-atoz' width={100} height={100} className='w-[70%] m-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TrustedCabService;