"use client"

import React, { useState } from 'react';
import Nav from './nav';
import Mobilenav from './mobilenav';


const Responsivenav = () => {
  const [showNav, setShowNav] = useState(false); 

  const setShowNavHandler = ()=> setShowNav(true);
  const closeNavHandler = () => setShowNav(false);


  return (
    <div>
         <Nav openNav={setShowNavHandler}/>
         <Mobilenav showNav={showNav} closeNav={closeNavHandler}/>   
     </div>
  )
}

export default Responsivenav
