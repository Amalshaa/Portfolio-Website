import React from 'react';
import Sectionheading from '@/components/helper/sectionheading';
import { skillsData } from '@/data/data';
import Skillcard from './skillcard';

const Skills = () => {
  return (
    <section id="skills">
    <div className='pt-16 pb-16 bg-[#0f0715]'>
        <Sectionheading>My Skills</Sectionheading>
        <div  className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
      {skillsData.map((skill,i)=>{
        return <div data-aos = "flip-left" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 150}`} key={skill.id}>
        <Skillcard skill={skill}/>
        </div>
      })}
    </div>
    </div>
    </section>
  );
};

export default Skills;
