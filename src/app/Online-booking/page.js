"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import {
  callicon,
  dateicon,
  emailicon2,
  locationicon,
  passengericon,
  taxiAnimation,
  timeicon,
  usericon,
} from '../../../public/Images/page';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const inputFields = [
  { placeholder: 'Your Name', icon: usericon, name: 'name' },
  { placeholder: 'Phone', icon: callicon, name: 'phone' },
  { placeholder: 'Email', icon: emailicon2, name: 'email' },
  { placeholder: 'Passenger', icon: passengericon, name: 'passenger' },
  { placeholder: 'Start Destination', icon: locationicon, name: 'start_destination' },
  { placeholder: 'End Destination', icon: locationicon, name: 'end_destination' },
  { placeholder: 'Date', type: 'date', name: 'date' },
  { placeholder: 'Time', type: 'time', name: 'time' },
];

const OnlineBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    passenger: '',
    start_destination: '',
    end_destination: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingClick = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_m7msz7c', 
        'template_hj9n33d',
        formData,
        'fX6Ymx3UT-XKESk44'
      )
      .then(
        (result) => {
          alert('Booking request sent successfully!');
        },
        (error) => {
          alert('Failed to send booking request. Please try again.');
        }
      );
  };

  return (
    <div className="mt-[50px]">
      <div className="lg:max-w-[1440px] m-auto px-[20px]">
        <div className="md:w-[70%] w-[100%] m-auto relative">
          <div className="absolute top-[-30px] left-0 w-full h-[50px] overflow-hidden z-[3]">
            <Image
              src={taxiAnimation}
              alt="Taxi Animation"
              width={70}
              height={70}
              className="taxi-animation"
            />
          </div>
        </div>
        <div className="bg-gray rounded-md md:w-[70%] w-[100%] m-auto booking-section relative overflow-hidden p-[20px]">
          <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
          <div className="xl:text-right text-left relative z-[2]">
            <h2 className="lg:text-[25px] text-[18px] font-stylefont font-medium text-lightyellow">
              Online booking
            </h2>
            <h1 className="text-[20px] lg:text-[30px] font-titlefont font-semibold text-yellow">
              Confirm your booking now!
            </h1>

            <form
              className="lg:w-[60%] w-[100%] float-end booking-form-section"
              onSubmit={handleBookingClick}
            >
              <motion.div className="grid lg:grid-cols-3 gap-x-[15px] gap-y-[25px] mt-[25px]">
                {inputFields.map((field, index) => (
                  <div key={index}>
                    <InputField
                      placeholder={field.placeholder}
                      icon={field.icon || null}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </motion.div>

              <div className="float-left mt-[50px]">
                <button className="booking-sectionbtn" type="submit">
                  Book a Taxi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
    </div>
  );
};

const InputField = ({ placeholder, icon, type, name, value, onChange }) => {
  return (
    <div className="flex flex-row gap-[5px] items-center border-gray border-[1px] px-[5px] py-[10px] rounded-sm">
      <input
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-[100%] bg-transparent placeholder:text-input outline-none font-textfont text-white text-[14px]"
      />
      {icon && <Image src={icon} width={30} height={30} className="imageFilter" />}
    </div>
  );
};

export default OnlineBooking;
