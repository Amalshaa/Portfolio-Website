import { BaseInfo } from "@/data/data";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home">
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            {/* Sub Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              I am {BaseInfo.name}
            </h1>
            {/* Title */}
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] xl:leading-[4rem] text-white">
              {BaseInfo.position}
            </h1>
            {/* Description */}
            <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
              {BaseInfo.description}
            </p>

            {/* Download CV Button */}
            <a
              href="/amalshaCV.pdf" 
              download="Amalsha_CV.pdf" 
            >
              <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 button-hover-effect">
                <span>Download CV</span>
                <FaDownload />
              </button>
            </a>
          </div>

          {/* Image Content */}
          <div className="flex justify-center lg:justify-end">
            {/* Adjusted for small and medium screens */}
            <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden border-4 border-blue-950 profile-img">
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
