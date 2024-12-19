import Link from 'next/link';
import React from 'react';
import WhyChooesUs from '../why-choose-atoz-cab/page';
import AtozCabFaq from '../AtoZ-cab-faq/page';

const servicesData = [
    {
        id: 1,
        title: 'City Rides',
        icon: '🚖', // Example icon
        description: 'Experience reliable city rides with AtoZ Cab Dwarka for all your local travel needs.',
    },
    {
        id: 2,
        title: 'Outstation Rides',
        icon: '🛣️',
        description: 'Book affordable outstation rides with Cab Dwarka for one-way or round trips.',
    },
    {
        id: 3,
        title: 'Airport Transfers',
        icon: '✈️',
        description: 'Enjoy on-time airport transfers with AtoZ Cab Dwarka, ensuring a stress-free journey.',
    },
    {
        id: 4,
        title: 'Tour Packages',
        icon: '🌄',
        description: 'Explore custom tour packages with Cab Dwarka and make your trips memorable.',
    },
    {
        id: 5,
        title: 'Luxury Services',
        icon: '🚘',
        description: 'Travel in style with AtoZ Cab Dwarka’s premium luxury cab services.',
    },
    {
        id: 6,
        title: 'Corporate Services',
        icon: '🏢',
        description: 'Simplify business travel with Cab Dwarka’s professional corporate cab services.',
    },
];

const ServiceCabDwarka = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('Images/services-cab-dwarka-atoz.svg')`,
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

                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h1 className="text-[25px] lg:text-[55px] font-bold font-titlefont text-white">Services</h1>
                    <p>
                        <Link className="text-white" href="/">
                            Services / Home
                        </Link>
                    </p>
                </div>
            </div>

            <div className="lg:max-w-[1440px] m-auto px-[20px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 my-[50px]">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white shadow-md rounded-md p-6 text-center hover:shadow-lg transition duration-300"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <WhyChooesUs />
            </div>

            <div>
                <AtozCabFaq />
            </div>

        </div>
    );
};

export default ServiceCabDwarka;
