import React from 'react';
import { socialPlateformLinks } from '../utilities/util.js';


function SocialLinks() {
    return (
        <>
        <div id='sociallinks' className='flex-row  flex  md:flex-col items-center justify-center md:fixed  bottom-0 left-0 text-primaryText  md:w-[10vh] md:h-[40vh] p-4 bg-mainBg '>
            {socialPlateformLinks.map((socialPlateformLink,idx) => {
                const IconComponent = socialPlateformLink.icon

                return (
                    <a key={idx} target='_blank' href={socialPlateformLink.url}>
                        <div id={socialPlateformLink.name}  className='hover:h-12  h-10 flex items-center justify-center p-3  py-2 hover:text-themeBlue hover:-translate-y-[10px]'>
                            <IconComponent  size={30} ></IconComponent>
                        </div>
                    </a>

                )
            })}
            <div className='h-full w-full md:flex items-center justify-center  hidden'>
            <div className='h-full w-[2px] bg-primaryText   '>

            </div>
            </div>
        </div>
        <div className='flex-row  items-center justify-center md:fixed bottom-0 right-0  text-primaryText hover:text-themeBlue bg-mainBg md:w-[10vh] md:h-[40vh] p-4'>
            <div className='h-40 md:block hidden hover:-translate-y-3'>
            <a href='mailto:dakshg393@gmail.com'>
            <h1 className='transform md:rotate-90  font-mono'>dakshg393@gmail.com</h1>
            </a>
            </div>
            <div className='h-full w-full md:flex items-center justify-center  hidden'>
            <div className='h-full w-[2px] bg-primaryText  '>

            </div>
            </div>
            
        </div>
        </>
    )
}

export default SocialLinks