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
// import tailwindIcon from "@iconify-icons/logos/tailwindcss"
import html5Icon from "@iconify-icons/logos/html-5";
import css3Icon from "@iconify-icons/logos/css-3";
import djangoIcon from "@iconify-icons/logos/django";
import python from "@iconify-icons/logos/python"
import cpp from "@iconify-icons/logos/c-plusplus"
import tailwind from "@iconify-icons/logos/tailwindcss-icon"

const skills = [
    { 
      
        icon: javascriptIcon,
        name: "Javascript" 
    },
    { 
     
        icon: nodejsIcon,
        name: "Nodejs" 
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
      
        icon: tailwind,
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
    },
    {
       
        icon: python,
        name: "Python" 
    },
    {
       
        icon: cpp,
        name: "C++" 
    },

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
    {   
        projectLink: "https://blogify-woad-five.vercel.app",
        githubLink: "https://github.com/dakshg393/Learn-React",
        title: "Blogify",
        desc: "A React-based blogging platform with a real-time editor (RTE) and Appwrite backend service. Implements state management for content updates.",
        skills: ["React", "Appwrite", "State Management", "RTE", "Tailwind", "JavaScript"]
    },
    {   
        projectLink: "https://bg-changer-five-theta.vercel.app",
        githubLink: "https://github.com/dakshg393/Learn-React",
        title: "BG Changer",
        desc: "A single-page application that allows users to change the background color dynamically, demonstrating component-based updates.",
        skills: ["React", "State Management", "SPA", "Tailwind", "JavaScript"]
    },
    {   
        projectLink: "https://currency-convertor-seven-pi.vercel.app",
        githubLink: "https://github.com/dakshg393/Learn-React",
        title: "Currency Converter",
        desc: "A real-time currency conversion tool that fetches and displays exchange rates from an API using fetch.",
        skills: ["React", "Fetch API", "JavaScript", "CSS"]
    },
    {   
        projectLink: "https://todo-localstorage-three.vercel.app",
        githubLink: "https://github.com/dakshg393/Learn-React",
        title: "Todo App ",
        desc: "A persistent to-do list app that stores tasks in local storage, ensuring data is retained across refreshes.",
        skills: ["React", "Local Storage", "State Management", "CSS", "JavaScript"]
    },

    {   
        projectLink: "https://password-generator-khaki-alpha.vercel.app",
        githubLink: "https://github.com/dakshg393/Learn-React",
        title: "Password Generator",
        desc: "A password generator that creates secure passwords using React hooks like useCallback, useRef, and useEffect.",
        skills: ["React", "useCallback", "useRef", "useEffect", "Tailwind", "JavaScript"]
    },
    {   
        projectLink: "https://company-portfolio-tau.vercel.app",
        githubLink: "https://github.com/dakshg393/Learn-React",
        title: "Company Portfolio",
        desc: "A portfolio website showcasing a company's details with tab-based navigation and dynamic UI updates.",
        skills: ["React", "Tab Navigation", "UI/UX", "HTML", "CSS", "JavaScript"]
    }


    // {
    //     projectLink :"",
    //     githubLink : "",
    //     title :"",
    //     desc:"",
    //     skills:[]
    // }
]
  

export {navLinks,skills ,socialPlateformLinks,mainProjects,miniProjects,ResumeLink}

