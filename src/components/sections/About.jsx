import React from 'react'
import { skills } from '../../utilities/util.js'
import { Icon } from '@iconify/react/dist/iconify.js'
const About = () => {
    return (
        <section id='About' className=' bg-mainBg px-22  md:p-20 pt-20 md:pt-20'>
            <div className='w-full h-10  flex md:flex-row flex-row-reverse items-center justify-end '>
                <div className='h-[2px] w-2/4  md:w-1/3 bg-primaryText mx-1'>.</div>
                <h1 className='text-primaryText text-sectionHeading font-fontHeading' ><span className='text-themeBlue  text-bold '>2.</span>About Me </h1>
            </div>
            <div id='about-main' className="h-full flex flex-col md:flex-row bg-mainBg">
                <div className='h-1/2 md:h-full md:w-1/2'>
                    <p className='text-center text-secondaryText p-4 font-fontParagraph'>I'm a passionate MERN stack developer currently in my 3rd year of Bachelor of Computer Applications (BCA). I thrive on building interactive, responsive, and efficient web applications that solve real-world problems. With a strong foundation in MongoDB, Express, React, and Node.js, I am continuously exploring new challenges and pushing my skills further in full-stack development.

                        I enjoy crafting projects that go beyond standard functionality, integrating automation, APIs, and scalable solutions. Whether it’s creating intuitive user experiences on the frontend or implementing secure, reliable servers on the backend, I strive to deliver quality, user-focused applications.
                        Here are some of the key skills I bring to my projects:







                    </p>

                </div>
                <div className=" h-1/2 md:h-full md:w-1/2 " >
                    <h1 className='text-primaryText text-center  text-miniprojectHeading font-fontHeading'>Skills</h1>
                    <div className='flex flex-row justify-center items-center flex-wrap '>
                        {skills.map((skill, idx) => {
                            const IconComponent = skill.icon
                            return (
                                <div id={skill.name} key={idx} className='p-2 m-4 border-2 border-themeBlue  flex flex-col items-center justify-center h-20 w-18 bg-white rounded-xl '>
                                    {/* <IconComponent size={40} className="text-themeBlue"></IconComponent> */}
                                    <Icon icon={skill.icon} width="100%" height="100%" />

                                </div>
                            )
                        })
                        }
                    </div></div>
            </div>
        </section>
    )
}

export default About