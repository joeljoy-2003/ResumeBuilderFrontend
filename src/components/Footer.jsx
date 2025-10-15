import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";


function Footer() {
  return (
    <>
      <div className='row align-items-center' style={{ backgroundColor: "purple" }}>
        <h4 className='text-center' style={{ color: "white" }}>Contact Us</h4>
        <h5 className='text-center' style={{ color: "white" }}><CiMail /> Resumebuilder.com</h5>
        <h5 className='text-center' style={{ color: "white" }}><FaPhoneAlt /> 9605403216</h5>

        <h4 className='text-center' style={{ color: "white" }}>Connect With Us</h4>
        <div className='text-center' style={{ color: "white" }}><FaWhatsapp /> <FaInstagram /> <IoLogoLinkedin /></div>





      </div>

    </>
  )
}

export default Footer
