import React from 'react'
import ButtonLink from '../minorcomponents/ButtonLink'

const Contact = () =>{
    return(
        <section id='Contact' className='w-full md:h-full bg-mainBg'>
            <div className='py-10  md:py-40 lg:px-80 md:px-10 flex flex-col items-center justify-center'>
                <h3 className='text-themeBlue font-mono'>What next?</h3>
                <h1 className='text-primaryText font-fontHeading text-mainText '>Get In Touch</h1>
                <p className='text-secondaryText text-center p-2 w-1/2 font-fontParagraph '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit ut assumenda, ducimus, eveniet accusantium minima quis dolore temporibus repellat aspernatur perspiciatis corrupti tempora facilis, laboriosam aperiam. Provident accusantium aperiam quas!</p>
                <ButtonLink classNameBox={"p-5"} content={"Say Hello"} url={"mailto:dkshg393@gmail.com"} />
            </div>
        </section>
    )
}

export default Contact


