import React from 'react';
import { logoAnimation } from '../assets/index.js';
function LogoLoader(){
    return(
        <div className="w-full h-full min-h-screen flex justify-center items-center bg-[#020c1b]">
      <img className="w-48 animate-custom mix-blend-lighten" src={logoAnimation} alt="logo"  />
    </div>
    )
}

export default LogoLoader