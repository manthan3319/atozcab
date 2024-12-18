"use client"
import Link from 'next/link';
import React from 'react'
import OnlineBooking from '../Online-booking/page';
import TrustedCabService from '../Trusted-Cab-Service-atoz/page';

const BookTaxiDwarka = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('Images/services-cab-dwarka.svg')`,
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
                className="flex flex-col items-center justify-center text-center py-[50px]"
            >
                <div>
                    <h1 className="text-[25px] lg:text-[55px] font-bold font-titlefont text-white">
                        Book AtoZ Cab in Dwarka - Safe, Comfortable, and Affordable
                    </h1>
                    <p>
                        <Link className="text-white" href="/">
                            AtoZ Cab / Home
                        </Link>
                    </p>
                </div>
            </div>


            <div>
                <OnlineBooking />
            </div>

            <div>
                <TrustedCabService />
            </div>
        </div>
    )
}

export default BookTaxiDwarka;