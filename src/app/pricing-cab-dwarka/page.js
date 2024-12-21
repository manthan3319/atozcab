'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import AboutLatestService from '../atoz-latest-services/page';
import { Ahmedabad, betDwarka, KhodalDham, Mumbai, Porbandar, Rajkot, somnath } from '../../../public/Images/page';
import Image from 'next/image';
import Loader from '../Loader/Loader';

const PricingCabDwarka = () => {
    // State for loading
    const [loading, setLoading] = useState(true);

    // Array for dynamic cards
    const packages = [
        {
            title: "Dwarka to Bet Dwarka",
            duration: "45 min (32.4 km)",
            price: "INR 875/-",
            img: betDwarka,
            description:
                "Enjoy a seamless and short ride from Dwarka to Bet Dwarka with AtoZ Cab Dwarka. Experience comfort and affordability like never before.",
        },
        {
            title: "Dwarka to Somnath",
            duration: "3 hr 58 min (237.3 km)",
            price: "INR 3575/-",
            img: somnath,
            description:
                "Enjoy a comfortable ride from Dwarka to Somnath with AtoZ Cab Dwarka. Our affordable packages ensure a memorable travel experience.",
        },
        {
            title: "Dwarka to Rajkot",
            duration: "4 hr 12 min (223.4 km)",
            price: "INR 3275/-",
            img: Rajkot,
            description:
                "Choose AtoZ Cab Dwarka for a hassle-free trip from Dwarka to Rajkot. Experience safety, comfort, and competitive pricing.",
        },
        {
            title: "Dwarka to Ahmedabad",
            duration: "7 hr 50 min (440.0 km)",
            price: "INR 6475/-",
            img: Ahmedabad,
            description:
                "Travel conveniently from Dwarka to Ahmedabad with Cab Dwarka. Your trusted partner for long-distance cab services.",
        },
        {
            title: "Dwarka to Porbandar",
            duration: "1 hr 45 min (95.7 km)",
            price: "INR 1750/-",
            img: Porbandar,
            description:
                "Book your ride with Cab Dwarka and explore Porbandar comfortably at unbeatable prices. Perfect for short trips!",
        },
        {
            title: "Dwarka to Mumbai",
            duration: "15 hr 30 min (953.2 km)",
            price: "INR 12,500/-",
            img: Mumbai,
            description:
                "Travel from Dwarka to Mumbai with AtoZ Cab Dwarka. Enjoy a safe, comfortable, and luxurious journey at competitive rates.",
        },
        {
            title: "Dwarka to Khodal Dham",
            duration: "12 hr 45 min (550 km)",
            price: "INR 8,000/-",
            img: KhodalDham,
            description: "Travel from Dwarka to Khodal Dham with AtoZ Cab Dwarka. Experience a safe, comfortable, and luxurious ride at affordable rates, ensuring a memorable journey."
        }
    ];

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

                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-[25px]">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className="flex flex-col rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden bg-white"
                            >
                                <div className="h-[220px] bg-gradient-to-r overflow-hidden from-blue-500 to-bluegreen flex items-center justify-center text-white text-lg font-bold">
                                <Image src={pkg.img} alt={pkg.title} className="w-full  " width={100} />
                                </div>

                                <div className="p-5 flex flex-col justify-between ">
                                    <div>
                                        <p className='mb-[5px] font-stylefont font-normal'> {pkg.title}</p>
                                        <p className="text-bluegreen font-semibold text-sm">
                                            {pkg.duration}
                                        </p>
                                        <p className="text-gray-700 text-sm mt-2">
                                            {pkg.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-4 border-t pt-4">
                                        <p className="text-yellow-500 text-lg font-bold">{pkg.price}</p>
                                        <button className="bg-yellow hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
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
