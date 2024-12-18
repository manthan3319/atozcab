"use client";
import React, { useState, useEffect } from "react";
import { NavbarData } from "../AtoZ-Cab-Data/page";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Staggers the child animations smoothly
                ease: "easeInOut",
                duration: 0.5,
            },
        },
    };

    const menuItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div
            className={`py-[15px] bg-black ${
                isSticky ? "fixed top-0 w-full shadow-lg z-[99999] animate-slideDown" : ""
            }`}
        >
            <div className="lg:max-w-[1440px] px-[20px] m-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-white">logo</p>
                    </div>

                    <motion.div
                        className="flex space-x-12 items-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {NavbarData()[1].NavbarMenu.map((item) => {
                            const link = item.link || "#";
                            return (
                                <motion.div
                                    key={item.id}
                                    className="relative group navigation"
                                    variants={menuItemVariants}
                                >
                                    <Link
                                        href={link}
                                        className={`text-white text-[18px] lg:text-[20px] inline-block font-medium font-stylefont pb-[5px] relative ${
                                            item.name === "Book Taxi" ? "custom-book-taxi" : ""
                                        }`}
                                    >
                                        {item.name}
                                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent group-hover:bg-yellow transition-all duration-500 ease-in-out"></span>
                                    </Link>

                                    {item.subcategory && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute left-[-5px] hidden group-hover:block bg-yellow text-white shadow-lg rounded-md w-48 p-2 z-[99]"
                                        >
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
                                        </motion.div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;