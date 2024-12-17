"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import {  facebook, instagram, justdial, logo, mobileicon } from '../../../public/Images/page';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const contactDetails = [
        { phone: '+91 85308 02090' },
        { email: 'contact@atozcabdwarka.com' },
    ];

    const socialmedia = [
        { name: 'Instagram', url: 'https://instagram.com/atozcabdwarka', icon: instagram },
        { name: 'JustDial', url: 'https://justdial.com/atozcabdwarka', icon: justdial },
        { name: 'Facebook', url: 'https://facebook.com/atozcabdwarka', icon:facebook },
    ];

    const usefulLinks = [
        { text: 'Home', url: '/home' },
        { text: 'About Us', url: '/about' },
        { text: 'Services', url: '/services' },
        { text: 'Packages', url: '/packages' },
        { text: 'Book Taxi', url: '/book-taxi' },
        { text: 'Contact Us', url: '/contact' },
    ];

    const newsletterText = "Subscribe to our newsletter for updates on our services, offers, and more!";

    return (
        <footer
            style={{
                backgroundImage: `url('Images/footer-bg.jpg')`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="lg:max-w-[1440px] px-[20px] text-white py-[20px] ">
                <div className="grid lg:grid-cols-3 gap-[15px] items-center">
                    {/* Logo Section */}
                    <section>
                        <Image 
                            src={logo}
                            alt="Atoz Cab Dwarka - Reliable Taxi Service" 
                            width={200} 
                            height={200} 
                        />
                    </section>

                    {/* Description Section */}
                    <section className="text-center">
                        <p>
                            Offering reliable and fast {`Atoz Cab Dwarka`} services for all your travel needs. Book your cab today!
                        </p>
                    </section>

                    {/* Contact Information Section */}
                    <section className="flex flex-row bg-bluegreen p-[25px] rounded-md items-center">
                        <div>
                            <Image src={mobileicon} alt="Atoz Cab Dwarka - Contact Us" className="imageFilter" width={50} height={50} />
                        </div>
                        <div>
                            <p className="text-[18px] font-stylefont text-yellow font-bold">Call for taxi</p>
                            <h2 className="text-[25px] font-titlefont font-bold">+91 85308 02090</h2>
                        </div>
                    </section>
                </div>

                <div className="grid lg:grid-cols-3 mt-[35px]">
                    {/* Social Media Section */}
                    <section>
                        <h2 className="text-[25px] font-bold font-titlefont mb-[10px]">
                            Follow {`Atoz Cab Dwarka`} on Social Media
                        </h2>
                        <div className="flex flex-row gap-[15px]">
                            {socialmedia.length > 0 ? (
                                socialmedia.map((link, index) => (
                                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${link.name}`}>
                                        <Image src={link.icon} alt={`Atoz Cab Dwarka - ${link.name}`} width={40} height={40} />
                                    </a>
                                ))
                            ) : (
                                <p>No social links available.</p>
                            )}
                        </div>
                    </section>

                    {/* Useful Links Section */}
                    <section>
                        <h2 className="text-[25px] font-bold font-titlefont mb-[10px]">Useful Links</h2>
                        <div>
                            <ul className="flex flex-col gap-[15px]">
                                {usefulLinks.length > 0 ? (
                                    usefulLinks.map((link, index) => (
                                        <li key={index} className="font-textfont text-[17px]">
                                            <a href={link.url} title={link.text}>
                                                {link.text}
                                            </a>
                                        </li>
                                    ))
                                ) : (
                                    <p>No useful links available.</p>
                                )}
                            </ul>
                        </div>
                    </section>

                    {/* Newsletter Section */}
                    <section>
                        <h2 className="text-[25px] font-bold font-titlefont mb-[10px]">Subscribe for Updates</h2>
                        <div>
                            <p className="text-[16px] font-textfont">{newsletterText}</p>
                            <div>
                                <input
                                    type="email"
                                    className="w-[100%] outline-none py-[15px] px-[5px] text-black"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    aria-label="Enter your email to subscribe"
                                />
                            </div>
                            <div className="float-left mt-[20px]">
                                <button className="booking-sectionbtn">Subscribe</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
