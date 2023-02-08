import React from 'react'
import { FaFacebookF,FaTwitter,FaLinkedin,FaGithubAlt,FaYoutube } from 'react-icons/fa';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid footer mt-5">
        <div className="footerHeading">FIND WITH ME</div>
        <div className="d-flex my-4 ">
            <Link to='/' className='footerIcon'> <FaFacebookF/> </Link>
            <Link to='/' className='footerIcon'> <FaTwitter/> </Link>
            <Link to='/' className='footerIcon'> <FaLinkedin/> </Link>
            <Link to='/' className='footerIcon'> <FaGithubAlt/> </Link>
            <Link to='/' className='footerIcon'> <FaYoutube/> </Link> 
        </div>
        <span className='footerLast'>© Copyright 2015 - 2023 | Ali Hossain</span>
    </div>
  )
}

export default Footer