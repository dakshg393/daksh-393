import { AgentVerse, StreamSphere, PortfolioProject, RecipeProject,Securechain } from "../assets/index.js";

const ResumeLink = "https://drive.google.com/file/d/1cDJut15e_GTK9iNMkGl4VERLHVDtz4RH/view?usp=sharing"

const navLinks = [
    {
        url: "#Home",
        name: "1.Home",
    },
    {
        url: "#About",
        name: " 2.About",
    },
    {
        url: "#Projects",
        name: "3.Projects",
    },
    {
        url: "#Contact",
        name: "4.Contact",
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
import git from "@iconify-icons/logos/git-icon"


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
    {

        icon: git,
        name: "Github"
    },


]

import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode, SiLinkedin } from "react-icons/si";
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
        icon: SiLinkedin,
        name: "Linkedin",
    },
    {
        url: "https://x.com/dakshg393",
        icon: FaXTwitter,
        name: "X",
    },

];

const mainProjects = [
    {
        title: "AgentVerse",
        desc: "Built a multi-agent AI platform for interview, legal, and healthcare use-cases using Gemini API and TypeScript. Enabled real-time voice interaction via AssemblyAI with dynamic LLM prompts and resume parsing. Included credit-based subscriptions, JWT authentication, and user history.",
        skills: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Gemini API", "AssemblyAI", "Zustand", "JWT"],
        githubLink: "https://github.com/dakshg393/AgentVerse", 
        projectLink: "https://agentverse-chi.vercel.app/", // add deployed link if available
        imagepath: AgentVerse
    },

    {
        title: "SecureChain",
        desc: "SecureChain is a blockchain-powered web application for secure and tamper-proof document verification. It enables users to upload, verify, and authenticate documents through decentralized ledger technology. The platform is built with React, Tailwind CSS, and Web3 to ensure a seamless and responsive user experience.",
        skills:["React", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "Web3.js", "MetaMask", "React Router"],
        githubLink: "https://github.com/dakshg393/SecureChain", // replace with actual link
        projectLink: "https://securechain-eight.vercel.app/", // add deployed link if available
        imagepath: Securechain
    },

    {
        title: "StreamSphere",
        desc: "Developed a full-stack video-sharing app with JWT auth, secure login, and Cloudinary video uploads. Users can like, comment, and subscribe, with a responsive UI built using React and Tailwind. Backend supports efficient video streaming with Mongoose aggregation.",
        skills: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT", "TailwindCSS", "Mongoose"],
        githubLink: "https://github.com/dakshg393/StreamSphere", 
        projectLink: "https://stream-sphere-4ban.vercel.app/", 
        imagepath: StreamSphere
    },
    {
        title: "Chefify",
        desc: "Recipe-sharing platform built with Django and AJAX-powered real-time search. Features include secure user authentication, responsive frontend, and a modular backend architecture. Won 2nd place at Spandan 2k24 Hackathon and later improved with enhanced UI/UX.",
        skills: ["Django", "HTML", "CSS", "JavaScript", "AJAX"],
        githubLink: "https://github.com/dakshg393/Chefify", // replace with actual link
        projectLink: "", // add deployed link if available
        imagepath: RecipeProject
    },

    {

        title: "Personal Portfolio",
        desc: "Designed a modern, responsive layout using React and Tailwind CSS, with interactive animations powered by Framer Motion to enhance user engagement. Implemented smooth navigation and visually appealing transitions, creating an engaging and accessible experience for visitors.",
        skills: ["React", "Tailwind", "CSS", "JavaScript", "Framer Motion"],
        githubLink: "https://github.com/dakshg393/daksh-393",
        projectLink: "https://dakshgupta.vercel.app/",
        imagepath: PortfolioProject,
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
    },

   
    
    // {
    //     projectLink :"",
    //     githubLink : "",
    //     title :"",
    //     desc:"",
    //     skills:[]
    // }
]


export { navLinks, skills, socialPlateformLinks, mainProjects, miniProjects, ResumeLink }

