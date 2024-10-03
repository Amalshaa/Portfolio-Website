"use client"

import React, { useEffect } from 'react';
import Hero from './hero/hero';
import About from './about/about';
import Project from './project/project';
import Skills from './skills/skills';
import Contact from './contact/contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing:"ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
  
    initAOS();
  }, []); 
  
  return (
    <div className="overflow-hidden">
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>

    </div>
  )
}

export default Home;
