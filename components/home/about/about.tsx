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

        <div data-aos = "fade-left" data-aos-anchor-placement="top-center"  className="w-[80%] mx-auto mt-20">
          {/* Text Content */}
          <div className="text-center">
            {/* Title */}
            <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
              {aboutInfo.title}
            </h1>

            {/* Description */}
            <p className="mt-6 text-base text-gray-500">
              {aboutInfo.description}
            </p>

            {/* Skills */}
            <div data-aos = "fade-left" data-aos-anchor-placement="top-center"  className="mt-8 space-y-6">
              {/* Frontend Development */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-7 h-7 bg-blue-800 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  Frontend Development
                </p>
              </div>

              {/* Backend Development */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-7 h-7 bg-orange-800 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  Backend Development
                </p>
              </div>

              {/* Full Stack Development */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-7 h-7 bg-green-800 flex items-center justify-center rounded-full">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  Full Stack Development
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div data-aos = "fade-left" data-aos-anchor-placement="top-center" className="mt-16 text-center">
            {/* Education Heading */}
            <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 my-10">
              Education
            </h1>

            {/* Education Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
              {/* University Degree Card */}
              <div className="bg-purple-300 shadow-md rounded-lg p-6 flex flex-col items-center justify-center w-full max-w-md">
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-semibold">BSc (Hons) in Information Technology</h3>
                  <p>University of Moratuwa</p>
                </div>
                <img src="/images/mora.jpeg" alt="University of Moratuwa Logo" className="mt-4 h-16 w-auto" />
              </div>

              {/* A/L Card */}
              <div className="bg-purple-300 shadow-md rounded-lg p-6 flex flex-col items-center justify-center w-full max-w-md">
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-semibold">G.C.E. A/L 2020</h3>
                  <p>Visakha Vidyalaya, Colombo 05</p>
                </div>
                <img src="/images/visakha.jpeg" alt="Visakha Vidyalaya Logo" className="mt-4 h-16 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
