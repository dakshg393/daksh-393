import { AiFillCloseCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import logo from '../assets/logo.png'
import { HashLink as Link } from "react-router-hash-link";
import { navLinks, ResumeLink } from "../utilities/util";
import { ButtonLink } from './index'

function Header() {

    const [isNavOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen(!isNavOpen)
        console.log("Navigation Open:", !isNavOpen);
    }

    return (

        <>


            <div className={`w-screen h-20 bg-mainBg  fixed z-[100]`}>
                <div className={`w-full h-full flex flex-row  bg-mainBg p-4 items-center `}>
                    <div className={` w-1/3 h-full flex flex-row items-center justify-start`}><Link smooth to="#Home"><img className="max-h-10" src={logo} /></Link></div>
                    <div className={`  md:h-full md:w-2/3 md:flex flex-col md:flex-row items-center md:justify-end justify-center pr-10  hidden `}>

                        {navLinks.map((nav, idx) => (
                            <Link smooth key={idx} to={nav.url} className="hover:text-themeBlue p-4 font-semibold text-primaryText font-mono ">{nav.name}</Link>
                        ))}

                        <ButtonLink content="Resume" url={ResumeLink} classNameBtn="" classNameBox="" blank={true} />
                    </div>
                    <div className="h-full flex items-center justify-end w-2/3  md:hidden">

                        <GiHamburgerMenu size={30} className="text-primaryText hover:text-themeBlue" onClick={toggleNav} />

                    </div>
                </div>

            </div>



            {/* //Navbar  for mobile screen  */}
            <div className={`h-full w-full flex-col justify-center z-[101] items-center  ${isNavOpen ? 'flex fixed h-full bg-mainBg' : 'hidden'}`}>
                <button className="right-12 top-12 absolute hover:text-themeBlue text-primaryText" onClick={toggleNav}><AiFillCloseCircle size={30} /></button>
                <div className="flex justify-center items-center flex-col h-5/6">
                    {navLinks.map((nav, idx) => (
                        <Link smooth key={idx} to={nav.url} className="hover:text-themeBlue p-4 font-semibold text-primaryText font-mono " onClick={toggleNav}>{nav.name}</Link>
                    ))}

                    <ButtonLink content="Resume" url="localhost:300" classNameBtn="" classNameBox="mt-2" blank={true} />

                </div>
            </div>
        </>
    )
}

export default Header