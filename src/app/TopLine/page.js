import Link from 'next/link';
import React from 'react';
import { emailicon, facebook, instagram, justdial, mobileicon } from '../../../public/Images/page';
import Image from 'next/image';

const TopLine = () => {
    return (
        <div className="bg-black py-[10px] relative before:content-[''] before:absolute before:bg-lightyellow before:w-[50%] before:h-full before:top-0 before:z-0 after:content-[''] after:absolute after:left-1/2 after:bg-lightyellow after:clip-triangle after:w-[50px] after:h-full after:top-0 ">
            <div className="lg:max-w-[1440px] m-auto px-[20px] ">
                <div className="flex flex-row justify-between relative z-10 ">
                    <div className="w-[50%] flex flex-row gap-[30px] ">
                        <div>
                            <Link href="/" className="flex flex-row items-center gap-[3px] text-black">
                                <Image src={mobileicon} alt="Mobile icon" width={30} height={30} className="" />
                                <p className="font-textfont font-medium">+91 85308 02090</p>
                            </Link>
                        </div>
                        <div>
                            <Link href="/" className="flex flex-row items-center gap-[3px] text-black">
                                <Image src={emailicon} alt="Email icon" width={30} height={30} className="" />
                                <p className="font-textfont font-medium">info@atozcab.in</p>
                            </Link>
                        </div>
                    </div>

                    <div className="w-[50%] flex justify-end">
                        <div className='flex flex-row gap-[20px]'>
                            <Link href="https://facebook.com/atozcabdwarka" passHref title="AtoZ Cab Dwarka - Facebook" className='border-r-[1px] border-gray pr-[15px]'>
                                <Image src={facebook} alt="AtoZ Cab Dwarka Facebook" width={30} height={30} />
                            </Link>
                            <Link href="/" passHref title="AtoZ Cab Dwarka - instagram" className='border-r-[1px] border-gray pr-[15px]'>
                                <Image src={instagram} alt="AtoZ Cab Dwarka instagram" width={30} height={30} />
                            </Link>
                            <Link href="/" passHref title="AtoZ Cab Dwarka - justdial">
                                <Image src={justdial} alt="AtoZ Cab Dwarka justdial" width={30} height={30} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopLine;