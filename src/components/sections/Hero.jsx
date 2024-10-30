import React from 'react';
import Profile from "../../assets/profile-pic.jpg";
import { motion } from 'framer-motion'
import { useState } from 'react';
function Hero() {
  
  
    return (
        <section id='Home' className='h-screen p-10 md:p-20 bg-mainBg flex flex-col md:flex-row-reverse items-center'>
            <div className='h-1/2 w-full flex items-center justify-center mt-8'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-[15rem] h-[15rem] sm:w-[18rem] sm:h-[18rem]"
                >
                    <div
                        className="w-full h-full rounded-full animate-rotateFocus border border-themeBlue bg-no-repeat"
                        style={{
                            backgroundImage: `url(${Profile})`,
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                        }}
                    ></div>
                </motion.div>
            </div>
            <div className='flex flex-col md:items-start items-center justify-center h-1/2  w-full md:p-8 '>
                <h1 className='text-themeBlue font-fontHeading  '>Hi, my name is</h1>
                <h2 className='text-primaryText font-fontHeading  text-[20px] md:text-mainText font-bold '>Daksh Gupta</h2>
                <h3 className='text-secondaryText text-center md:text-left font-fontHeading text-[20px] md:text-mainText font-bold'>FullStack MERN Developer</h3>
                <p className='text-center md:text-left text-secondaryText font-fontParagraph '>I'm a passionate FullStack developer specialized in building 
                    exceptional web apps from Mandsaur, India 📍</p>
            </div>
            
        </section>
    )
}

export default Hero