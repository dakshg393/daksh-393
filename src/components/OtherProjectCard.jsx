import { FiFolder, FiGithub } from "react-icons/fi";
import React from "react";
import { HiExternalLink } from "react-icons/hi";

function OtherProjectCard({
    projectLink,
    githubLink,
    title,
    desc,
    skills
}) {

    console.log(skills)
    return (
        <div className="flex flex-col items-center justify-center p-12  w-full bg-[#112240]  ">
            <div className=" flex flex-row flex-1 justify-between items-center w-full  text-primaryText">
                <a className="text-themeBlue " href={projectLink} target="_self"><FiFolder size={40} /></a>
                <div className="flex flex-row gap-2">
                    <a className="hover:text-themeBlue" href={githubLink} target="_blank"><FiGithub size={30} /></a>
                    <a className="hover:text-themeBlue" href={projectLink} target="_blank"> <HiExternalLink size={30} /> </a>
                </div>
            </div>
            <div>
                <h1 className="text-left text-primaryText font-fontHeading text-miniprojectHeading hover:text-themeBlue "><a href={projectLink} target="_blank">{title}</a></h1>
                <p className="text-left py-2 text-secondaryText font-fontParagraph ">{desc}</p>
                <ul className="flex flex-row justify-start  flex-wrap items-center py-2 text-secondaryText w-full">
                    {skills && skills.map((skill,idx)=>(
                        <li key={idx} className="text-primaryText px-2">{skill}</li>
                    )) }
                   
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default OtherProjectCard