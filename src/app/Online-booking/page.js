'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
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

const inputFields = [
  { placeholder: 'Your Name', icon: usericon },
  { placeholder: 'Phone', icon: callicon },
  { placeholder: 'Email', icon: emailicon2 },
  { placeholder: 'Passenger', icon: passengericon },
  { placeholder: 'Start Destination', icon: locationicon },
  { placeholder: 'End Destination', icon: locationicon },
  { placeholder: 'Date', icon: dateicon, type: 'date' },
  { placeholder: 'Time', icon: timeicon, type: 'time' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const containerVariants = {
  hidden: {},
  visible: { 
      transition: {
          staggerChildren: 0.5,
      },
  },
};
const inputFieldVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeInOut' } },
};

const OnlineBooking = () => {
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
        <div className="bg-gray rounded-md md:w-[70%] w-[100%] m-auto booking-section after:h-full after:left-0 after:w-[300px] after:top-1 relative overflow-hidden p-[20px]">
          <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
          <div className="md:text-right text-left relative z-[2]">
            <div className="relative z-[99]">
              <h2 className="lg:text-[25px] text-[18px] font-stylefont font-medium text-lightyellow">
                Online booking
              </h2>
              <h1 className="text-[20px] lg:text-[30px] font-titlefont font-semibold text-yellow">
                Confirm your booking now!
              </h1>

              <div className="md:w-[60%] w-[100%] float-end bokking-from-section">
                <motion.div
                  className="grid lg:grid-cols-3 gap-x-[15px] gap-y-[25px] mt-[25px] animate-slideDown"
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {inputFields.map((field, index) => (
                    <motion.div
                      key={index}
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"  
                      viewport={{ once: true }}
                      style={{
                        transitionDelay: `${(index + 1) * 0.3}s`,
                      }}
                    >
                      <InputField
                        placeholder={field.placeholder}
                        icon={field.icon}
                        type={field.type}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="float-left mt-[50px]">
                  <button className="booking-sectionbtn">Book a Taxi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ placeholder, icon, type }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-row gap-[5px] items-center border-gray border-[1px] px-[5px] py-[10px] rounded-sm`}
    >
      <input
        type={type || 'text'}
        placeholder={placeholder}
        className="w-[100%] bg-transparent  placeholder:text-input outline-none font-textfont text-white text-[14px]"
      />
      <Image src={icon} width={35} height={35} className="imageFilter" />
    </div>
  );
};

export default OnlineBooking;
