'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import AboutLatestService from '../atoz-latest-services/page';
import Loader from '../Loader/Loader';
import OurBestSellersPackages from '../Our-Best-Sellers-Packages/page';
const PricingCabDwarka = () => {
    const [loading, setLoading] = useState(true);

   

    const cabRoutes = [
        "Somnath Temple",
        "Gir National Park",
        "Statue of Unity",
        "Akshardham Temple Gandhinagar",
        "Sun Temple Modhera",
        "Rann of Kutch",
        "Palitana Temples",
        "Champaner-Pavagadh Archaeological Park",
        "Dwarka Beach",
        "Nageshwar Jyotirlinga",
        "Rukmini Devi Temple",
        "Bet Dwarka",
        "Dwarka Lighthouse",
        "Gopi Talav",
        "Sudama Setu",
        "Dwarka Purnatirth",
        "Dholavira",
        "Mandvi Beach",
        "Narmada Canal"
    ];

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            {/* Hero Section */}
            <div
                style={{
                    backgroundImage: `url('Images/pricing-cab-dwarka-atoz.svg')`,
                    backgroundSize: 'cover',
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

                <div style={{ position: 'relative', zIndex: 2 }} className='px-[20px]'>
                    <h1 className="text-[45px] lg:text-[55px] font-bold font-titlefont text-white">
                        AtoZ Cab Packages - Dwarka
                    </h1>
                    <p>
                        <Link className="text-white" href="/">
                            AtoZ Cab / Home
                        </Link>
                    </p>
                </div>
            </div>

            {/* Packages Section */}
            <div className="lg:max-w-[1440px] m-auto px-[20px] pt-[50px]">
                <div>
                    <h1 className="text-[25px] text-center lg:text-[30px] font-titlefont font-semibold text-bluegreen mb-8">
                        Our Best Sellers Packages
                    </h1>

                    <div>
                        <OurBestSellersPackages/>
                    </div>

                </div>

                <div className='my-[50px]'>
                    <h1 className="text-[25px] text-center lg:text-[30px] font-titlefont font-semibold text-bluegreen mb-8">
                        Top Cab Routes from <strong className="text-yellow">AtoZ Cab Dwarka</strong>
                    </h1>
                    <ul className='flex flex-col gap-[10px]'>
                        {cabRoutes.map((route, index) => (
                            <li key={index} className='text-[17px] font-stylefont'>
                                Cab From Dwarka to <strong className="text-gray">{route}</strong> with <strong className="text-gray">AtoZ Cab Dwarka</strong>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div>
                <AboutLatestService />
            </div>
        </div>
    );
};

export default PricingCabDwarka;
