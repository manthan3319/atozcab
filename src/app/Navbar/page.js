"use client";
import React from 'react';
import { NavbarData } from '../AtoZ-Cab-Data/page';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="py-[15px] bg-black">
            <div className="lg:max-w-[1440px] px-[20px] m-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-white">logo</p>
                    </div>

                    <div className="flex space-x-12">
                        {NavbarData()[1].NavbarMenu.map((item) => {
                            const link = item.link || "#";
                            return (
                                <div key={item.id} className="relative group navigation">
                                    <Link
                                        href={link}
                                        className={`text-white font-medium font-stylefont pb-[5px] relative ${item.name === "Book Taxi" ? "custom-book-taxi" : ""}`}
                                    >
                                        {item.name}

                                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent group-hover:bg-yellow transition-all duration-500 ease-in-out"></span>
                                    </Link>

                                    {item.subcategory && (
                                        <div className="absolute left-[-5px] hidden group-hover:block bg-yellow text-white shadow-lg rounded-md w-48 p-2 z-[99] group-hover:opacity-100 group-focus-within:opacity-100">
                                            {item.subcategory.map((sub) => {
                                                const subLink = sub.link || "#";
                                                return (
                                                    <Link
                                                        key={sub.id}
                                                        href={subLink}
                                                        className="block px-4 py-2 text-sm hover:bg-white hover:text-yellow transition duration-300 ease-in-out font-medium font-stylefont pb-[5px]"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
