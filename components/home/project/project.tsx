import Sectionheading from '@/components/helper/sectionheading';
import { projectData } from '@/data/data';
import React from 'react';
import Image from 'next/image'; // Assuming you're using 'next/image'
import Link from 'next/link';

const Project = () => {
    return (
      <section id="project">
      <div className="pt-16 pb-16 bg-[#050709]">
        {/* Section Heading */}
        <Sectionheading>My Projects</Sectionheading>
  
        {/* Project Grid */}
        <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {projectData.map((project , i) => (
            <div
            data-aos = "fade-up" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 150}`}
              key={project.id}
              className="bg-purple-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Link href={project.url} target="_blank">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={250} // Adjusted width for smaller size
                  height={150} // Adjusted height for smaller size
                  className="w-full rounded"
                />
              </Link>
  
              {/* Project Title */}
              <h3 className="mt-4 text-lg font-semibold text-white">
                {project.title}
              </h3>
  
              {/* Project Description */}
              <p className="mt-2 text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
    );
  };
  
  export default Project;
  

