import Image from 'next/image';
import React from 'react'
import { callicon, dateicon, emailicon2, locationicon, passengericon, taxiAnimation, timeicon, usericon } from '../../../public/Images/page';

const OnlineBooking = () => {
  return (
    <div className='mt-[50px]'>
      <div className='lg:max-w-[1440px] m-auto px-[20px]'>
        <div className='w-[70%] m-auto relative'>
          <div className='absolute top-[-30px] left-0 w-full h-[50px] overflow-hidden z-[3]'>
            <Image
              src={taxiAnimation}
              alt="Taxi Animation"
              width={70}
              height={70}
              className='taxi-animation '
            />
          </div>
        </div>
        <div className='bg-gray rounded-md w-[70%] m-auto booking-section after:h-full after:left-0 after:w-[300px] after:top-1 relative overflow-hidden p-[20px]'>
          <div className="absolute inset-0 bg-black opacity-50 z-[1]"></div>
          <div className='text-right relative z-[2]'>
            <div className='relative z-[99]'>
              <h2 className='lg:text-[25px] text-[18px] font-stylefont font-medium text-lightyellow'>Online booking</h2>
              <h1 className='text-[20px] lg:text-[30px] font-titlefont font-semibold text-yellow'>Confirm your booking now!</h1>

              <div className='w-[60%] float-end'>
                <div className=' grid lg:grid-cols-3 gap-x-[15px] gap-y-[25px] mt-[25px]'>
                  <div className='flex flex-row gap-[5px] items-center border-gray border-[1px] px-[5px] py-[10px] rounded-sm'>
                    <div>
                      <input type='text' placeholder='Your Name' className='w-[100%] bg-transparent text-input placeholder:text-input outline-none font-textfont text-[14px]' />
                    </div>
                    <div>
                      <Image src={usericon} width={35} height={35} className='imageFilter' />
                    </div>
                  </div>

                  <div className='flex flex-row gap-[5px] items-center border-gray border-[1px] px-[5px] py-[10px] rounded-sm'>
                    <div>
                      <input type='number' placeholder='Phone' className='w-[100%] bg-transparent text-input placeholder:text-input outline-none font-textfont text-[14px]' />
                    </div>
                    <div>
                      <Image src={callicon} width={35} height={35} className='imageFilter' />
                    </div>
                  </div>

                  <div className='flex flex-row gap-[5px] items-center border-gray border-[1px] px-[5px] py-[10px] rounded-sm'>
                    <div>
                      <input type='email' placeholder='Email' className='w-[100%] bg-transparent text-input placeholder:text-input outline-none font-textfont text-[14px]' />
                    </div>
                    <div>
                      <Image src={emailicon2} width={35} height={35} className='imageFilter' />
                    </div>
                  </div>

                  <div className='flex flex-row gap-[5px] items-center border-gray border-[1px] px-[5px] py-[10px] rounded-sm'>
                    <div>
                      <input type='text' placeholder='passenger' className='w-[100%] bg-transparent text-input placeholder:text-input outline-none font-textfont text-[14px]' />
                    </div>
                    <div>
                      <Image src={passengericon} width={35} height={35} className='imageFilter' />
                    </div>
                  </div>

                  <div className='flex flex-row gap-[5px] items-center border-gray border-[1px] px-[5px] py-[10px] rounded-sm'>
                    <div>
                      <input type='text' placeholder='Start Destination' className='w-[100%] bg-transparent text-input placeholder:text-input outline-none font-textfont text-[14px]' />
                    </div>
                    <div>
                      <Image src={locationicon} width={35} height={35} className='imageFilter' />
                    </div>
                  </div>

                  <div className='flex flex-row gap-[5px] items-center border-gray border-[1px] px-[5px] py-[10px] rounded-sm'>
                    <div>
                      <input type='text' placeholder='End Destination' className='w-[100%] bg-transparent text-input placeholder:text-input outline-none font-textfont text-[14px]' />
                    </div>
                    <div>
                      <Image src={locationicon} width={35} height={35} className='imageFilter' />
                    </div>
                  </div>

                  <div className='flex flex-row gap-[5px] items-center border-gray border-[1px] px-[5px] py-[10px] rounded-sm'>
                    <div>
                      <input type='date' placeholder='Booking Date' className='w-[100%] bg-transparent text-input placeholder:text-input outline-none font-textfont text-[14px]' />
                    </div>
                    <div>
                      <Image src={dateicon} width={35} height={35} className='imageFilter' />
                    </div>
                  </div>


                  <div className='flex justify-between flex-row gap-[5px] items-center border-gray border-[1px] px-[5px] py-[10px] rounded-sm'>
                    <div className='w-[100%]'>
                      <input
                        id="timeInput"
                        type="time"
                        className='w-[100%] bg-transparent text-input placeholder:text-input outline-none font-textfont text-[14px] appearance-none'
                      />
                    </div>
                    <div>
                      <Image src={timeicon} width={20} height={35} className='imageFilter' alt="Custom Time Icon" />
                    </div>
                  </div>

                </div>
                <div className='float-left mt-[50px]'>
                  <button className='booking-sectionbtn'>Book a Taxi</button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default OnlineBooking;