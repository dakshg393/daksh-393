import React from "react";
import { About, Contact, Footer, Header, Hero, SocialLinks } from "../components/index";
import Project from "../components/sections/Projects";
import {Helmet} from 'react-helmet-async'
function Home(){
    return(
        <>
           <Helmet>
                <title>Daksh Gupta - MERN Stack Developer
                    {/* Software Engineer Portfolio */}

                </title>
                <meta name="author" content="Daksh Gupta">
                <meta
                    name="description"
                    content="Portfolio of Daksh Gupta, a BCA student and MERN stack developer aspiring to become a software engineer."
                    //  Full-Stack Developer, MERN, MongoDB, Express, React, Node.js, HTML, CSS, Tailwind, web development, responsive design,"
                />
                <meta
                    name="keywords"
                    content="Daksh Gupta,dakshgupta,Daksh gupta , sde, software Engineer, MERN Stack, Portfolio, Web Developer,Mandsaur,BCA,Mandsaur University"
                />
                <meta property="og:title" content="Daksh Gupta - Software Engineer Portfolio" />
                <meta
                    property="og:description"
                    content="Explore the projects and skills of Daksh Gupta, a future software engineer specializing in the MERN stack."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dakshgupta.vercel.app" />
                {/* <meta property="og:image" content="https://yourportfolio.com/images/profile.jpg" /> */}
                <link rel="canonical" href="https://dakshgupta.vercel.app" />
            </Helmet>

            <Header />
            <Hero/>
            <About />
            <Project/>
            <Contact/>
            <SocialLinks/>
            <Footer/>
            
        </>
    )
}
export default Home