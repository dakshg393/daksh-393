import { FiGithub } from "react-icons/fi"; 
import { HiExternalLink } from "react-icons/hi"; 
import React from 'react'

const MainProjectCard = ({title,desc,skills,githubLink,projectLink,imagepath,idx}) =>{
    const isleft=(idx+1)%2
    return(
        <>
        <div className={` w-8/10 h-[70vh] bg-transparent md:bg-mainBg p-4 my-20  md:my-0 flex  ${isleft?"flex-row":"flex-row-reverse"} justify-center items-center `}>
            <div className=' md:w-8/12 h-full md:p-2 py-10 px-4  md:relative  absolute  w-full  z-0'>
                <a href={projectLink} target="_self"><img src={imagepath}  className='h-full w-full rounded-xl opacity-10 md:opacity-100'/></a>
            </div>
            <div className={` md:w-4/12 h-full bg-[#112240]/12 md:bg-mainBg  flex  justify-center flex-col  relative z-10 ${isleft?"items-end":"items-start"}`}>
                <p className="text-themeBlue font-mono">Featured Project</p>
                <h3 className='text-primaryText hover:text-themeBlue font-fontHeading  text-sectionHeading font-bold '><a href={projectLink}>{title}</a></h3>
                <div className={`text-secondaryText md:bg-[#112240]  md:p-4 md:w-[120%] ${isleft?"md:left-[20%]":"md:right-[20%]"}`}>
                    <p className={isleft?"text-right":"text-left font-fontParagraph"}>{desc}</p>
                </div>
                <ul className="text-secondaryText flex flex-row flex-wrap items-end py-4 font-mono">
                    {skills && skills.map((skill)=>(
                        <ol className="mx-2">{skill} </ol>
                    ))}
                    
                    
                </ul>
                <div className={`text-primaryText flex  w-full ml-2 gap-4 p-3 ${isleft?"justify-end":"justify-start"} `}>
                    <a className="hover:text-themeBlue" target="_blank" href={githubLink}><FiGithub  size={26}/></a>
                    <a className="hover:text-themeBlue" target="_blank" href={projectLink}> <HiExternalLink size={26} /> </a>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default MainProjectCard