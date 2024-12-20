"use client"
import React from 'react';
import { LatestServices } from '../AtoZ-Cab-Data/page';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const AboutLatestService = () => {
    // Variants for card animation
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
    };

    return (
        <div className="bg-gray-50 py-10">
            <div className="lg:max-w-[1440px] m-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-8">
                    <p className="text-[20px] font-stylefont font-semibold text-yellow">LATEST SERVICES</p>
                    <h2 className="lg:text-[35px] text-[25px] font-titlefont font-semibold text-bluegreen">
                        Discover Our Most Popular Services
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {LatestServices.map((service, index) => {
                        // Use Intersection Observer for each card
                        const { ref, inView } = useInView({
                            triggerOnce: true, // Trigger animation only once
                            threshold: 0.1, // Trigger when 10% of the card is visible
                        });

                        return (
                            <motion.div
                                ref={ref}
                                key={service.id}
                                className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
                                variants={cardVariants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                            >
                                <div
                                    className="relative h-[300px] bg-gray"
                                    style={{
                                        clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0% 100%)',
                                    }}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-[300px] object-cover"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[10px] bg-yellow-400" />
                                </div>

                                <div className="p-6">
                                    <h3 className="lg:text-[25px] text-[20px] font-stylefont font-semibold">
                                        {service.name}
                                    </h3>
                                    <p className="text-[15px] mt-[15px] font-textfont font-normal">
                                        {service.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="float-left mt-[15px] bottom-0">
                                        <button className="booking-sectionbtn">Book a Taxi</button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutLatestService;
