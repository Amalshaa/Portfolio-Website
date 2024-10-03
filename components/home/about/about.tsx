import React from 'react';
import Sectionheading from '@/components/helper/sectionheading';
import { aboutInfo } from '@/data/data';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about">
    <div className="pt-16 pb-16 bg-[#050709]">
      {/* Section Heading */}
      <Sectionheading> About Me </Sectionheading>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mt-20">
        {/* Text Content */}
        <div>
          {/* Title */}
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>

          {/* Skills */}
          <div className="mt-8 space-y-6">
            {/* Frontend Development */}
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-blue-800 flex items-center justify-center rounded-full">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontend Development
              </p>
            </div>

            {/* Backend Development */}
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-orange-800 flex items-center justify-center rounded-full">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>

            {/* Full Stack Development */}
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-green-800 flex items-center justify-center rounded-full">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder for future content */}
        <div>
          {/* stats content */}
          <div className='grid grid-cols-2 gap-16 items-center lg:mx-auto'>
            <div>
                <Image 
                src="/images/customer.png"
                alt="image"
                width={80}
                height={80}
                className="mx-auto"
                />
                {/* <p className='mt-3 font-bold text-xl text-white text-center'>\
                    {aboutInfo.client}
                </p> */}
                <p className='text-base sm:text-lg text-gray-400 text-center'>
                    Satisfied customers
                </p>
            </div>
            <div>
                <Image 
                src="/images/experience.png"
                alt="image"
                width={80}
                height={80}
                className="mx-auto"
                />
                {/* <p className='mt-3 font-bold text-xl text-white text-center'>\
                    {aboutInfo.experience}
                </p> */}
                <p className='text-base sm:text-lg text-gray-400 text-center'>
                    Years Experience
                </p>
            </div>
            <div>
                <Image 
                src="/images/completed.png"
                alt="image"
                width={80}
                height={80}
                className="mx-auto"
                />
                {/* <p className='mt-3 font-bold text-xl text-white text-center'>
                    {aboutInfo.project}
                </p> */}
                <p className='text-base sm:text-lg text-gray-400 text-center'>
                    Completed Projects
                </p>
            </div>
            <div>
                <Image 
                src="/images/rocket.png"
                alt="image"
                width={80}
                height={80}
                className="mx-auto"
                />
                {/* <p className='mt-3 font-bold text-xl text-white text-center'>
                    {aboutInfo.website}
                </p> */}
                <p className='text-base sm:text-lg text-gray-400 text-center'>
                    Website Launch
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
