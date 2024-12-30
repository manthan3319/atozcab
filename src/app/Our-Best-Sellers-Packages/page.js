
'use client';
import React, { useRef, useState, useEffect } from 'react';
import { packages } from '../AtoZ-Cab-Data/page';
import Link from 'next/link';
import Image from 'next/image';

const OurBestSellersPackages = () => {
  return (
    <div className="lg:max-w-[1440px] m-auto px-[20px] pt-[50px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 gap-[25px]">
        {packages.map((pkg, index) => (
          <PackageCard key={index} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

const PackageCard = ({ pkg }) => {
  const [selectedOption, setSelectedOption] = useState("twoway");
  const listRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (listRef.current) {
      const isOverflow =
        listRef.current.scrollHeight > listRef.current.clientHeight;
      setIsOverflowing(isOverflow);
    }
  }, [selectedOption, pkg]);

  return (
    <div className="flex flex-col rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden bg-white">
      {/* Image Section */}
      <div className="h-[350px] bg-gradient-to-r overflow-hidden from-blue-500 to-bluegreen flex items-center justify-center text-white text-lg font-bold">
        <Image src={pkg.img} alt={pkg.title} className="w-full" width={100} height={350} />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between h-[650px]">
        {/* Package Details */}
        <div>
          <p className="mb-[5px] font-stylefont font-normal">{pkg.title}</p>
          <p className="text-bluegreen font-semibold text-sm">{pkg.duration}</p>
          <p className="text-gray-700 text-sm mt-2">{pkg.description}</p>

          <ul className="list-disc list-inside mt-2 text-gray-600">
            {pkg.places?.map((place, placeIndex) => (
              <li key={placeIndex}>{place}</li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="font-bold text-gray-800">Select Option:</p>
            <select
              className="w-full mt-2 p-2 border rounded-md"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="twoway">Two Way</option>
              <option value="oneway">One Way</option>
            </select>
          </div>

          {/* Car Options */}
          <div className="mt-4">
            <p className="font-bold text-gray-800">
              {selectedOption === "twoway" ? "Two Way Car Options:" : "One Way Car Options:"}
            </p>
            <ul
              ref={listRef}
              className={`mt-2 h-[100px] overflow-y-auto scrollbar-thin ${isOverflowing
                  ? "scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                  : "scrollbar-none"
                }`}
            >
              {(selectedOption === "twoway" ? pkg.cars : pkg.oneway)?.map((car, carIndex) => (
                <li
                  key={carIndex}
                  className="flex justify-between text-gray-700"
                >
                  <span>
                    {car.type} {selectedOption === "twoway" ? ` (₹${car.kmprice}/km)` : ""}
                  </span>
                  <span className="flex flex-row gap-[5px]">
                    <span>₹</span>
                    {selectedOption === "twoway" ? ` ${car.price ?? "N/A"}` :` ${car.kmprice}/km` } 
                  </span>
                </li>
              )) || (
                  <li className="text-gray-500">No options available.</li>
                )}
            </ul>
          </div>

        </div>

        {/* Call-to-Action */}
        <div className="flex items-center justify-between mt-4 border-t pt-4">
          <Link
            href={`https://wa.me/+918530802090?text=Hello,%20I%20want%20to%20book%20the%20${pkg.title}%20package%20with%20a%20${selectedOption}%20option.%20Please%20provide%20details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow inline-block hover:bg-yellow-600 w-[100%] text-center text-white px-4 py-2 rounded-md transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurBestSellersPackages;
