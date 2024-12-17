import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { contactService } from '../../../public/Images/page';

const contactData = [
    {
        id: 1,
        title: 'Our Location',
        icon: '📍',
        description: 'Visit AtoZ Cab Dwarka at our office for personalized service and support.',
        details: 'Dwarka, New Delhi, India',
    },
    {
        id: 2,
        title: 'Call Us',
        icon: '📞',
        description: 'Reach out to Cab Dwarka for bookings or inquiries via phone.',
        details: '+91 85308 02090',
    },
    {
        id: 3,
        title: 'Email Us',
        icon: '✉️',
        description: 'Email AtoZ Cab Dwarka for queries, feedback, or service assistance.',
        details: 'info@atozcab.in',
    },
];

const Contact = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('Images/contact-cab-dwarka.svg')`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                }}
                className="flex flex-col items-center justify-center text-center py-[50px]"
            >
                <div>
                    <h1 className="text-[25px] lg:text-[55px] font-bold font-titlefont text-white">
                        Contact - AtoZ Cab
                    </h1>
                    <p>
                        <Link className="text-white" href="/">
                            Contact / Home
                        </Link>
                    </p>
                </div>
            </div>

            <div className="lg:max-w-[1440px] m-auto px-[20px] py-10">
                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contactData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-md rounded-md p-6 text-center hover:shadow-lg transition duration-300"
                        >
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-2">{item.description}</p>
                            <p className="text-lg font-medium text-black">{item.details}</p>
                        </div>
                    ))}
                </div>

                {/* Contact Form Placeholder */}
                <div className="mt-10 flex flex-wrap lg:flex-nowrap items-center  w-[80%] m-auto bg-gray rounded-md">
                    <div className="w-full lg:w-1/2">
                        <Image src={contactService} alt='service - atoz dwarka' width={100} height={100} className='w-[100%] h-full' />
                    </div>
                    <div className="w-full lg:w-1/2  bg-white shadow-lg p-[18px]">
                        <h2 className="font-titlefont text-[25px] font-semibold lg:text-[35px] text-bluegreen mb-4">Inquiry Form</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 font-stylefont">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none font-stylefont focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2 font-stylefont">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border rounded-md  font-stylefont focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block font-stylefont  text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Enter your message"
                                    className="w-full px-4 py-2 border font-stylefont rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                ></textarea>
                            </div>
                            <div className='float-left mt-[2px]'>
                                <button className='booking-sectionbtn'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
