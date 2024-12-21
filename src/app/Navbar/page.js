"use client";
import React, { useState, useEffect } from "react";
import { NavbarData } from "../AtoZ-Cab-Data/page";
import Link from "next/link";
import { motion } from "framer-motion";
import 'react-modern-drawer/dist/index.css'
import Drawer from 'react-modern-drawer'
import Image from "next/image";
import { logo, menuicon } from "../../../public/Images/page";

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
                staggerChildren: 0.1,
                ease: "easeInOut",
                duration: 0.5,
            },
        },
    };

    const menuItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <div
            className={`md:py-[15px] py-[20px] bg-black ${isSticky ? "fixed top-0 w-full shadow-lg z-[9999999] animate-slideDown" : ""
                }`}
        >
            <div className="lg:max-w-[1440px] px-[20px] m-auto md:block hidden">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href="/">
                            <Image src={logo} alt="atoz-cab-dwarka" width={100} height={50} />
                        </Link>
                    </div>

                    <motion.div
                        className="flex lg:space-x-12 md:space-x-5 items-center"
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
                                        className={`text-white text-[18px] lg:text-[20px] inline-block font-medium font-stylefont pb-[5px] relative ${item.name === "Book Taxi" ? "custom-book-taxi" : ""
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

            <div className="md:hidden block px-[20px] bg-black">
                <div className="flex flex-row justify-between items-center">
                    <Link href="/">
                    <Image src={logo} alt="atoz-cab-dwarka" width={80} height={50} />
                    </Link>
                    <div>
                        <button onClick={toggleDrawer}>
                            <Image src={menuicon} alt="menu-atozcab" width={45} className="" />
                        </button>
                    </div>
                </div>

                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="right"
                    className="bla bla bla"
                >
                    <div className="px-[20px] mt-[35px]">
                        {NavbarData()[1].NavbarMenu.map((item) => {
                            const link = item.link || "#";
                            return (
                                <motion.div
                                    key={item.id}
                                    className="relative group navigation gap-[25px] mt-[15px]"
                                    variants={menuItemVariants}
                                >
                                    <Link
                                        href={link}
                                        onClick={toggleDrawer}
                                        className={`text-black text-[18px] lg:text-[20px] inline-block font-medium font-stylefont pb-[5px] relative ${item.name === "Book Taxi" ? "custom-book-taxi3" : ""}`}
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
                                                        onClick={toggleDrawer} // Subcategory पर क्लिक करते ही drawer बंद हो जाएगा
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
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;