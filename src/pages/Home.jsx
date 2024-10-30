import React from "react";
import { About, Contact, Footer, Header, Hero, SocialLinks } from "../components/index";
import Project from "../components/sections/Projects";

function Home(){
    return(
        <>
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