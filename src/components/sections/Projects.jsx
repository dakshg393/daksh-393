
import React, { useState } from "react";
import MainProjectCard from "../MainProjectCard";
import OtherProjectCard from "../OtherProjectCard";
import { mainProjects } from "../../utilities/util";
import { miniProjects } from "../../utilities/util";


function Project() {
    const [isShowmore, setShowMore] = useState(false)
    const limitedProject = miniProjects.slice(0, 6)
    const projectToShow = isShowmore ? miniProjects : limitedProject
    
    const handleShowMore = () => setShowMore(!isShowmore)

    return (
        <section id='Projects' className=' bg-mainBg md:px-20 pt-12 md:pt-0 py-5 px-5 md:py-2'>
            <div className='w-full h-10  flex flex-row-reverse items-center justify-end bg-mainBg md:py-20  '>
                <div className='h-[2px] w-2/4  md:w-1/3 bg-primaryText '>.</div>
                <h1 className='text-primaryText   text-sectionHeading font-fontHeading' ><span className="text-themeBlue font-fontHeading">3.</span>Projects </h1>
            </div>
            < div className="flex flex-center items-center gap-10 flex-col">
            {mainProjects.map((project,idx)=>(
                <MainProjectCard title={project.title} desc={project.desc} skills={project.skills} githubLink={project.githubLink} projectLink={project.projectLink} imagepath={project.imagepath}  idx={idx} />
            ))}
                

            </div>
            <h1 className="my-20 text-primaryText text-center font-fontHeading font-semibold text-sectionHeading">Other Notable Creations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] grid-rows-6 sm:grid-rows-3 lg:grid-rows-2  p-3 lg:px-40">
                {
                    projectToShow && projectToShow.map((project,idx) => (
                        
                        <OtherProjectCard key={idx} projectLink={project.projectLink}
                            githubLink={project.githubLink}
                            title={project.title}
                            desc={project.desc}
                            skills={project.skills} />
                    ))
                }
            </div>
            <div className="flex items-center justify-center w-full p-4">
            <button className="font-mono items-center text-themeBlue bg-transparent border border-themeBlue rounded-[4px] py-[10px] px-4 text-[14px] transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-themeBlue " onClick={handleShowMore} >Show {isShowmore?"Less":"More"}</button>
            </div>
        </section>
    )
}

export default Project