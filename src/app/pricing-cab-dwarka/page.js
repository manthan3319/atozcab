<<<<<<< HEAD
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
=======
'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import AboutLatestService from '../atoz-latest-services/page';
import { Ahmedabad, betDwarka, KhodalDham, Mumbai, Porbandar, Rajkot, somnath } from '../../../public/Images/page';
import Image from 'next/image';
import Loader from '../Loader/Loader';
import { packages } from '../AtoZ-Cab-Data/page';
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

                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-[25px]">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className="flex flex-col rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden bg-white "
                            >
                                <div className="h-[350px] bg-gradient-to-r overflow-hidden from-blue-500 to-bluegreen flex items-center justify-center text-white text-lg font-bold">
                                    <Image src={pkg.img} alt={pkg.title} className="w-full" width={100} />
                                </div>

                                <div className="p-5 flex flex-col justify-between h-[600px]">
                                    <div>
                                        <p className="mb-[5px] font-stylefont font-normal">{pkg.title}</p>
                                        <p className="text-bluegreen font-semibold text-sm">{pkg.duration}</p>
                                        <p className="text-gray-700 text-sm mt-2">{pkg.description}</p>

                                        <ul className="list-disc list-inside mt-2 text-gray-600">
                                            {pkg.places?.map((place, placeIndex) => (
                                                <li key={placeIndex}>{place}</li>
                                            ))}
                                        </ul>

                                        <div className="mt-4">
                                            <p className="font-bold text-gray-800">Car Options:</p>
                                            <ul className="mt-2">
                                                {pkg.cars.map((car, carIndex) => (
                                                    <li key={carIndex} className="flex justify-between text-gray-700">
                                                        <span>{car.type}</span>
                                                        <span className='flex flex-row gap-[5px]'><span>₹</span>{car.price}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4 border-t pt-4">
                                        <p className="text-yellow-500 text-lg font-bold">{pkg.price}</p>
                                        <Link
                                            href="https://wa.me/+918530802090?text=Hello,%20I%20want%20to%20book%20the%20Dwarka%20to%20Somnath%20package.%20Please%20provide%20details."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-yellow inline-block hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors"
                                        >
                                            Book Now
                                        </Link>
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
>>>>>>> 8ddc7790b008e8f0470bba7ce9f1630b3eb40779
