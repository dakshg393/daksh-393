
import { PortfolioProject,RecipeProject} from "../assets/index.js";

const ResumeLink = "https://drive.google.com/file/d/1cDJut15e_GTK9iNMkGl4VERLHVDtz4RH/view?usp=sharing"

const navLinks = [
    {
        url:"#Home",
        name:"1.Home",
    },
    {
        url:"#About",
        name:" 2.About",
    },
    {
        url:"#Projects",
        name:"3.Projects",
    },
    {
        url:"#Contact",
        name:"4.Contact",
    },
]

//must import icon above that add as skill below

import javascriptIcon from "@iconify-icons/logos/javascript";
import nodejsIcon from "@iconify-icons/logos/nodejs-icon";
import expressIcon from "@iconify-icons/logos/express";
import reactIcon from "@iconify-icons/logos/react";
import mongodbIcon from "@iconify-icons/logos/mongodb";
import tailwindIcon from "@iconify-icons/logos/tailwindcss"
import html5Icon from "@iconify-icons/logos/html-5";
import css3Icon from "@iconify-icons/logos/css-3";
import djangoIcon from "@iconify-icons/logos/django";


const skills = [
    { 
      
        icon: javascriptIcon,
        name: "Javascript" 
    },
    { 
     
        icon: nodejsIcon,
        name: "CSS" 
    },
    {
       
        icon: expressIcon,
        name: "Express" 
    },
    {
     
        icon: reactIcon,
        name: "React" 
    },
    {
      
        icon: mongodbIcon,
        name: "MongoDB" 
    },
    {
      
        icon: tailwindIcon,
        name: "Tailwind" 
    },
    {
      
        icon: html5Icon,
        name: "HTML" 
    },
    {
       
        icon: css3Icon,
        name: "CSS" 
    },
    {
       
        icon: djangoIcon,
        name: "Django" 
    }

]

import { AiFillGithub} from "react-icons/ai"; 
import { SiLeetcode,SiLinkedin  } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
const socialPlateformLinks = [
    {
      url: "https://github.com/dakshg393/",
      icon: AiFillGithub,
      name: "Github",
    },
    {
      url: "https://leetcode.com/u/dakshg393/",
      icon: SiLeetcode,
      name: "Leetcode",
    },
  
    {
      url: "https://www.linkedin.com/in/dakshg393/",
      icon: SiLinkedin ,
      name: "Linkedin",
    },
    {
        url: "https://x.com/dakshg393",
        icon: FaXTwitter ,
        name: "X",
      },
    
  ];

const mainProjects = [
    {
        
            title:"Personal Portfolio",
            desc:"Tjis port folioA portfolio description can refer to a collection of work samples that demonstrate your skills and expertise, or a collection of financial assets and investment tools:",
            skills:["React","React-dom" , "JavaScript"],
            githubLink:"https://github.com",
            projectLink:"",
            imagepath:RecipeProject,
    },
    {
        
        title:"Personal Portfolio",
        desc:"Designed a modern, responsive layout using React and Tailwind CSS, with interactive animations powered by Framer Motion to enhance user engagement. Implemented smooth navigation and visually appealing transitions, creating an engaging and accessible experience for visitors.",
        skills:[ "React", "Tailwind", "CSS", "JavaScript", "Framer Motion"],
        githubLink:"https://github.com",
        projectLink:"https://project.com",
        imagepath:PortfolioProject,
}
]

const miniProjects = [
    {   projectLink :"https://password-generator-dakshs-projects-3bc3a00a.vercel.app/",
        githubLink : "https://github.com/dakshg393/Learn-React/tree/main/05passwordGenerator",
        title :"Password Ganerator",
        desc:"This project gives lerning about react and react routehis project gives lerning about react and react route his project gives lerning about react and react router",
        skills:["React","JS","ReactRouter","React","JS","ReactRouter"]
    },
    {   projectLink :"https://password-generator-dakshs-projects-3bc3a00a.vercel.app/",
        githubLink : "https://github.com/dakshg393/Learn-React/tree/main/05passwordGenerator",
        title :"Password Ganerator",
        desc:"This project gives lerning about react and react router",
        skills:["React","JS","ReactRouter","React","JS","ReactRouter"]
    },{   projectLink :"https://password-generator-dakshs-projects-3bc3a00a.vercel.app/",
        githubLink : "https://github.com/dakshg393/Learn-React/tree/main/05passwordGenerator",
        title :"Password Ganerator",
        desc:"This project gives lerning about react and react router",
        skills:["React","JS","ReactRouter","React","JS","ReactRouter"]
    },{   projectLink :"https://password-generator-dakshs-projects-3bc3a00a.vercel.app/",
        githubLink : "https://github.com/dakshg393/Learn-React/tree/main/05passwordGenerator",
        title :"Password Ganerator",
        desc:"This project gives lerning about react and react router",
        skills:["React","JS","ReactRouter","React","JS","ReactRouter"]
    },{   projectLink :"https://password-generator-dakshs-projects-3bc3a00a.vercel.app/",
        githubLink : "https://github.com/dakshg393/Learn-React/tree/main/05passwordGenerator",
        title :"Password Ganerator",
        desc:"This project gives lerning about react and react router",
        skills:["React","JS","ReactRouter","React","JS","ReactRouter"]
    },{   projectLink :"https://password-generator-dakshs-projects-3bc3a00a.vercel.app/",
        githubLink : "https://github.com/dakshg393/Learn-React/tree/main/05passwordGenerator",
        title :"Password Ganerator",
        desc:"This project gives lerning about react and react router",
        skills:["React","JS","ReactRouter","React","JS","ReactRouter"]
    },{   projectLink :"https://password-generator-dakshs-projects-3bc3a00a.vercel.app/",
        githubLink : "https://github.com/dakshg393/Learn-React/tree/main/05passwordGenerator",
        title :"Password Ganerator",
        desc:"This project gives lerning about react and react router",
        skills:["React","JS","ReactRouter","React","JS","ReactRouter"]
    },{   projectLink :"https://password-generator-dakshs-projects-3bc3a00a.vercel.app/",
        githubLink : "https://github.com/dakshg393/Learn-React/tree/main/05passwordGenerator",
        title :"Password Ganerator",
        desc:"This project gives lerning about react and react router",
        skills:["React","JS","ReactRouter","React","JS","ReactRouter"]
    },{   projectLink :"https://password-generator-dakshs-projects-3bc3a00a.vercel.app/",
        githubLink : "https://github.com/dakshg393/Learn-React/tree/main/05passwordGenerator",
        title :"Password Ganerator",
        desc:"This project gives lerning about react and react router",
        skills:["React","JS","ReactRouter","React","JS","ReactRouter"]
    },{   projectLink :"https://password-generator-dakshs-projects-3bc3a00a.vercel.app/",
        githubLink : "https://github.com/dakshg393/Learn-React/tree/main/05passwordGenerator",
        title :"Password Ganerator",
        desc:"This project gives lerning about react and react router",
        skills:["React","JS","ReactRouter","React","JS","ReactRouter"]
    },
    {
        projectLink :"",
        githubLink : "",
        title :"",
        desc:"",
        skills:[]
    }
]
  

export {navLinks,skills ,socialPlateformLinks,mainProjects,miniProjects,ResumeLink}