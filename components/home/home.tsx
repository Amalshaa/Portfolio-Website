import React from 'react';
import Hero from './hero/hero';
import About from './about/about';
import Project from './project/project';
import Skills from './skills/skills';
import Contact from './contact/contact';

const Home = () => {
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
